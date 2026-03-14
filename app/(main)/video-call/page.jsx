import { db } from "@/lib/prisma";
import VideoCall from "./video-call";

export default async function VideoCallPage({ searchParams }) {
  const { sessionId, token, caseId } = await searchParams;

  // Basic guard
  if (!sessionId || !token || !caseId) {
    return (
      <div className="mt-20 text-center text-gray-500">
        Invalid video call link
      </div>
    );
  }

  // Fetch case including lawyer
  const legalCase = await db.legalCase.findUnique({
    where: { id: caseId },
    select: {
      endTime: true,
      startTime: true,
      lawyer: {
        select: { name: true },
      },
    },
  });

  if (!legalCase) {
    return (
      <div className="mt-20 text-center text-gray-500">
        Case not found
      </div>
    );
  }

  return (
    <VideoCall
      sessionId={sessionId}
      token={token}
      caseStartTime={legalCase.startTime}
      caseEndTime={legalCase.endTime}
      caseId={caseId}
      lawyerName={legalCase.lawyer?.name || "Lawyer"} // fallback
    />
  );
}
