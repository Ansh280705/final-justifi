import { Notebook } from "lucide-react";

// app/prescriptions/layout.jsx
export const metadata = {
  title: "Legal Advice - Justifi",
  description: "View legal advice provided by your lawyers",
};

export default function PrescriptionLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      
      {children}
    </div>
  );
}
