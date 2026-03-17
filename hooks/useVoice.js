import { useState, useCallback, useEffect, useRef } from "react";

export const useVoice = (onTranscript) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const onTranscriptRef = useRef(onTranscript);

  // Keep transcript callback updated without triggering effects
  useEffect(() => {
    onTranscriptRef.current = onTranscript;
  }, [onTranscript]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognition && !recognition) {
        const recog = new SpeechRecognition();
        recog.continuous = false;
        recog.interimResults = false;
        recog.lang = "en-US";

        recog.onstart = () => setIsListening(true);
        recog.onend = () => setIsListening(false);
        recog.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          if (onTranscriptRef.current) onTranscriptRef.current(transcript);
        };

        setRecognition(recog);
      }
    }
  }, []); // Only run once on mount

  const startListening = useCallback(() => {
    if (recognition) {
      try {
        recognition.start();
      } catch (err) {
        console.error("Speech recognition error:", err);
      }
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
    }
  }, [recognition]);

  const speak = useCallback((text) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return { isListening, startListening, stopListening, speak };
};
