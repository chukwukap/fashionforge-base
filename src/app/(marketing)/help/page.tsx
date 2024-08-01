"use client";
import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const HelpPage = () => {
  const faqItems = [
    {
      question: "How do I create a new design?",
      answer:
        "To create a new design, navigate to the 'Designs' page and click on the 'New Design' button. Follow the step-by-step process to upload your design files and add necessary details.",
    },
    {
      question: "Can I collaborate with other designers?",
      answer:
        "Yes! Fashion Forge supports collaboration. You can invite other designers to your projects through the 'Project Settings' page. They'll receive an email invitation to join your project.",
    },
    {
      question: "How do I manage my client measurements?",
      answer:
        "Client measurements can be managed in the 'Clients' section. You can add new clients, update their measurements, and associate them with specific projects for easy reference.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use industry-standard encryption to protect your data. Your designs and client information are only accessible to you and those you explicitly grant access to.",
    },
    {
      question: "How can I organize my designs into collections?",
      answer:
        "You can create and manage collections in the 'Collections' page. Simply create a new collection and add your designs to it. This helps in organizing seasonal or thematic groups of designs.",
    },
  ];

  return (
    <div className="container mx-auto pt-52 py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Help Center</h1>

      <p className="text-lg mb-8">
        Welcome to the Fashion Forge Help Center. Here you&apos;ll find answers
        to common questions and guidance on using our platform.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="mb-8">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
        <p className="text-lg mb-4">
          If you couldn&apos;t find the answer you were looking for, our support
          team is here to help.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>

      {"currentUser" && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Video Tutorials</h2>
          <p className="text-lg mb-4">
            Check out our video tutorials for step-by-step guidance on using
            Fashion Forge features.
          </p>
          <Button variant="outline" asChild>
            <Link href="/tutorials">View Tutorials</Link>
          </Button>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">User Guide</h2>
        <p className="text-lg mb-4">
          For a comprehensive overview of Fashion Forge features and how to use
          them, download our user guide.
        </p>
        <Button variant="outline" asChild>
          <a href="/user-guide.pdf" download>
            Download User Guide (PDF)
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HelpPage;
