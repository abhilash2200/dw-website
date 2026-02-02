"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSearchParams } from "next/navigation";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5A53F4] to-[#11009E] px-5">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircleIcon 
                sx={{ 
                  fontSize: 80, 
                  color: "#10b981" 
                }} 
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Thank You{name ? `, ${name}` : ""}!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Your enquiry has been submitted successfully
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
            <p className="text-gray-700 text-left">
              <strong>What happens next?</strong>
            </p>
            <ul className="text-gray-600 text-left mt-2 space-y-2 list-disc list-inside">
              <li>Our team will review your enquiry</li>
              <li>We&apos;ll get back to you within 24 hours</li>
              <li>Check your email for confirmation</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[#11009E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#513eff] transition duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/contact-us"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
            >
              Contact Us Again
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-2">
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-blue-600">
              <a 
                href="tel:+917003659978" 
                className="hover:underline"
              >
                📞 +91 7003659978
              </a>
              <a 
                href="mailto:marketing@digitalwolf.co.in" 
                className="hover:underline"
              >
                ✉️ marketing@digitalwolf.co.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5A53F4] to-[#11009E]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}

export default ThankYouPage;
