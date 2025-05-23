"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CreateAssignmentFormType } from "@/utils/schemas/create-assignment.schema";
import { ROUTE } from '@/utils/routes';

export default function ThankYouPage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [data, setData] = useState<CreateAssignmentFormType | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("thankYouData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setMessage(parsed.message || null);
      setData(parsed.data || null);
    } else {
      router.replace(`${ROUTE.HOME}`);
    }
  }, [router]);

  if (!message) return null;

  return (
    <div className="p-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">
        Thank you for submitting your assignment!
      </h1>
      <p className="mb-6">{message}</p>
      {data && (
        <div className="text-left bg-gray-100 p-4 rounded mb-6 overflow-auto">
          {Object.entries(data).map(([key, value]) => {
            const formattedKey = key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase());

            if (key === "github_repo_url") {
              return (
                <p key={key} className="text-left mb-2">
                  <strong>{formattedKey}:</strong>{" "}
                  <a
                    href={String(value)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {value}
                  </a>
                </p>
              );
            }

            return (
              <p key={key} className="text-left mb-2">
                <strong>{formattedKey}:</strong> {String(value)}
              </p>
            );
          })}
        </div>
      )}
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
      >
        Back to Form
      </button>
    </div>
  );
}
