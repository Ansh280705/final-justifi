"use client";

import { Clipboard, User, Gavel } from "lucide-react";

export default function LegalAdviceCard({ legalAdvice }) {
  const { case: legalCase, caseSummary, legalPoints, instructions, caseHistory } = legalAdvice;
  const lawyer = legalCase.lawyer;

  return (
    <div className="border rounded-lg bg-white p-4 sm:p-6 shadow-md mb-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-client pb-3 mb-4">
        <div className="flex items-center gap-3 mb-3 md:mb-0">
          <img
            src="lawyer-desk-logo.png"
            alt="LawyerDesk Logo"
            className="h-12 w-12 object-contain"
          />
          <div>
            <h2 className="text-lg font-bold">
              Lawyer<span className="text-client">Desk</span>
            </h2>
            <p className="text-sm text-gray-500">
              Trusted Legal Platform
            </p>
          </div>
        </div>

        <div className="text-sm text-left md:text-right">
          <p className="font-medium">
            <strong>Lawyer Name: </strong>{lawyer?.name} <br />{lawyer?.practiceArea} <br />{lawyer?.qualifications?.join(", ")} 
          </p>
          <p className="font-medium">
            <strong>Date: </strong>
            {new Date(legalCase.startTime).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Client Info */}
      <div className="border border-client/40 rounded-lg p-4 bg-gray-50 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-client/20">
            <User className="text-client w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-gray-800">Client Details</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-black font-bold">Client Name</p>
            <p className="font-medium text-gray-800">{legalCase.clientName}</p>
          </div>
          <div>
            <p className="text-black font-bold">Phone</p>
            <p className="font-medium text-gray-800">+91 {legalCase.clientPhone}</p>
          </div>
          <div>
            <p className="text-black font-bold">Age</p>
            <p className="font-medium text-gray-800">{legalCase.clientAge}</p>
          </div>
          <div>
            <p className="text-black font-bold">Gender</p>
            <p className="font-medium text-gray-800">{legalCase.clientGender}</p>
          </div>
        </div>
      </div>

      {/* Lawyer Info */}
      <div className="border border-client/40 rounded-lg p-4 bg-gray-50 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-client/20">
            <Gavel className="text-client w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-gray-800">Professional Details</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-black font-bold">Practice Area</p>
            <p className="font-medium text-gray-800">{lawyer?.practiceArea}</p>
          </div>
          <div>
            <p className="text-black font-bold">Qualifications</p>
            <p className="font-medium text-gray-800">{lawyer?.qualifications?.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Legal Info */}
      <div className="space-y-4 w-full max-w-full overflow-hidden">
        {caseHistory && (
          <div className="border border-client/40 rounded-lg p-4 bg-gray-50 break-words w-full">
            <strong className="block mb-2">Case History / Context</strong>
            <p className="text-gray-800 whitespace-pre-wrap">{caseHistory}</p>
          </div>
        )}

        {["Case Summary", "Legal Points", "Actionable Guidance"].map((title, index) => {
          const value =
            title === "Case Summary"
              ? caseSummary
              : title === "Legal Points"
              ? legalPoints
              : instructions;
          if (!value) return null;
          return (
            <div
              key={index}
              className="border border-client/40 rounded-lg p-4 bg-gray-50 break-words w-full"
            >
              <strong className="block mb-2">{title}</strong>
              <p className="text-gray-800 whitespace-pre-wrap">{value}</p>
            </div>
          );
        })}
        
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-sm text-gray-600 space-y-3">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <p className="font-medium">Validity:</p>
          <p className="text-gray-700 text-xs">
            This legal document is issued following LawyerDesk Guidelines. It is valid as an electronic record and should be retained by the client.
          </p>
          <p className="font-medium mt-2">Consultation Consent:</p>
          <p className="text-gray-700 text-xs">
            The advice provided is based on the information shared during the session. It should not be considered a final judicial decree.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <p className="font-medium">Confidentiality Notice:</p>
          <ul className="list-disc list-inside text-gray-700 text-xs space-y-1 mt-1">
            <li>Attorney-Client privilege applies where applicable by law.</li>
            <li>This document is confidential and intended solely for the recipient.</li>
            <li>For urgent legal matters, please contact immediate judicial assistance or emergency services.</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <img
              src="lawyer-desk-logo.png"
              alt="Justifi Logo"
              className="h-6 w-6"
            />
            <span>
              Generated by <strong>Justifi</strong>
            </span>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs text-gray-500">
              Date: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
