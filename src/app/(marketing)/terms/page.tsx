"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TermsPage = () => {
  return (
    <div className="container mx-auto pt-52 py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p className="text-lg mb-8">
        Welcome to Fashion Forge. By using our platform, you agree to comply
        with and be bound by the following terms and conditions of use.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">
        1. Acceptance of Terms
      </h2>
      <p className="text-lg mb-6">
        By accessing or using Fashion Forge, you agree to be bound by these
        Terms of Service and all applicable laws and regulations. If you do not
        agree with any part of these terms, you may not use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">2. User Accounts</h2>
      <p className="text-lg mb-6">
        You are responsible for maintaining the confidentiality of your account
        and password. You agree to accept responsibility for all activities that
        occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">
        3. Intellectual Property
      </h2>
      <p className="text-lg mb-6">
        All content uploaded to Fashion Forge remains the property of the
        respective designers. By using our platform, you grant us a license to
        display and facilitate transactions for your designs.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">
        4. Prohibited Activities
      </h2>
      <p className="text-lg mb-6">
        Users are prohibited from engaging in any illegal activities, copyright
        infringement, or actions that may harm the platform or other users.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">5. Payments and Fees</h2>
      <p className="text-lg mb-6">
        Fashion Forge may charge fees for certain services. All fees are
        non-refundable unless otherwise stated. We reserve the right to change
        our fee structure with appropriate notice.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">6. Termination</h2>
      <p className="text-lg mb-6">
        We reserve the right to terminate or suspend accounts at our sole
        discretion, without notice, for conduct that we believe violates these
        Terms of Service or is harmful to other users, us, or third parties, or
        for any other reason.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">
        7. Limitation of Liability
      </h2>
      <p className="text-lg mb-6">
        Fashion Forge is not liable for any indirect, incidental, special,
        consequential or punitive damages resulting from your use of the
        service.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">8. Changes to Terms</h2>
      <p className="text-lg mb-6">
        We reserve the right to modify these terms at any time. We will provide
        notice of significant changes by posting an announcement on our
        platform.
      </p>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Questions or Concerns?</h2>
        <p className="text-lg mb-4">
          If you have any questions about our Terms of Service, please
          don&apos;t hesitate to contact us.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>

      <div className="mt-12">
        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
