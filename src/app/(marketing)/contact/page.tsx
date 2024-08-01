import React from "react";
// import ContactForm from '@/components/ContactForm';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | FashionForge",
  description: "Get in touch with us for any inquiries or support.",
};

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8">
        We&apos;d love to hear from you. Please fill out the form below and
        we&apos;ll get back to you as soon as possible.
      </p>
      {/* <ContactForm /> */}
    </div>
  );
};

export default ContactPage;
