import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fashion Forge",
  description: "Fashion Forge privacy policy and data protection information.",
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Fashion Forge, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>
                Personal information (e.g., name, email address, billing
                information)
              </li>
              <li>Design and project data</li>
              <li>Usage information and analytics</li>
              <li>Communication records</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use your information to provide and improve our services,
              process transactions, communicate with you, and ensure the
              security of our platform. We do not sell your personal information
              to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement robust security measures to protect your data from
              unauthorized access, alteration, disclosure, or destruction. This
              includes encryption, regular security audits, and strict access
              controls.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, correct, or delete your personal
              information. You may also object to or restrict certain processing
              activities. To exercise these rights, please contact our privacy
              team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or concerns about our Privacy Policy,
              please contact us at:
              <br />
              <a
                href="mailto:privacy@fashionforge.com"
                className="text-blue-600 hover:underline"
              >
                privacy@fashionforge.com
              </a>
            </p>
          </section>
        </div>
        <div className="bg-gray-50 px-6 py-4">
          <p className="text-sm text-gray-500">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
