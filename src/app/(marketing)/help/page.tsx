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
import {
  QuestionMarkCircleIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const HelpPage = () => {
  const faqItems = [
    {
      question: "How do I create a new design project in FashionForge?",
      answer:
        "To start a new design project, navigate to the 'create' page and click the 'New Project' button. You'll be guided through a process to name your project, set its type (e.g., individual garment, collection, accessories), and choose initial settings. You can then add designs, mood boards, and other elements to your project workspace.",
    },
    {
      question: "Can I collaborate with other designers and team members?",
      answer:
        "Absolutely! FashionForge is built for collaboration. In any project, go to 'Project Settings' and click 'Invite Members'. You can add team members by email and set their roles (e.g., designer, pattern maker, project manager). Invited members will receive an email with access instructions. Our platform supports real-time collaboration, allowing multiple team members to work on designs simultaneously.",
    },
    {
      question: "How do I manage and organize my design assets?",
      answer:
        "FashionForge offers a comprehensive asset management system. In the 'Assets' section, you can upload and organize fabrics, trims, color palettes, and more. Use tags and folders to keep everything organized. You can easily drag and drop these assets into your designs. The 'Collections' feature allows you to group related designs, perfect for organizing seasonal lines or thematic groups.",
    },
    {
      question: "What tools does FashionForge offer for creating designs?",
      answer:
        "FashionForge provides a range of design tools suitable for beginners to advanced users. Our digital sketching tools include brushes that mimic traditional media. For pattern making, we offer both 2D pattern drafting tools and 3D draping simulations. You can also import designs from popular design software. Our platform includes a library of customizable templates to help you get started quickly.",
    },
    {
      question: "How can I present my designs to clients?",
      answer:
        "FashionForge offers several presentation options. You can create digital lookbooks, mood boards, and tech packs directly in the platform. For client presentations, use the 'Presentation Mode' to showcase your designs professionally. You can also generate shareable links with customizable permissions, allowing clients to view and comment on designs without full account access.",
    },
    {
      question: "Is my design data secure and protected?",
      answer:
        "Your data security is our top priority. We use industry-standard encryption for all data in transit and at rest. Your designs and project files are stored in secure cloud servers with regular backups. We offer granular permission settings, allowing you to control exactly who can view or edit each project. Additionally, we provide options for watermarking designs shared externally.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  py-16 px-4  text-gray-100">
      <h1 className="text-5xl font-bold mb-8 mt-16 text-blue-400">
        Help Center
      </h1>

      <p className="text-xl mb-12 text-gray-300">
        Welcome to the FashionForge Help Center. Whether you&apos;re just
        starting out or you&apos;re an experienced designer, here you&apos;ll
        find comprehensive guides, FAQs, and resources to help you make the most
        of our fashion design platform.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 flex items-center text-white">
          <QuestionMarkCircleIcon className="w-8 h-8 mr-2 text-blue-400" />
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="mb-8">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-700"
            >
              <AccordionTrigger className="text-lg text-white hover:text-blue-400">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
            <ChatBubbleLeftRightIcon className="w-6 h-6 mr-2 text-blue-400" />
            Need More Help?
          </h2>
          <p className="text-lg mb-4 text-gray-300">
            If you couldn&apos;t find the answer you were looking for, our
            friendly support team is ready to assist you with any questions
            about using FashionForge, from basic operations to advanced
            features.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
            <VideoCameraIcon className="w-6 h-6 mr-2 text-blue-400" />
            Video Tutorials
          </h2>
          <p className="text-lg mb-4 text-gray-300">
            Explore our library of video tutorials covering everything from
            getting started with FashionForge to advanced design techniques and
            collaboration features.
          </p>
          <Button
            variant="outline"
            asChild
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
          >
            <Link href="/tutorials">View Tutorials</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
          <DocumentTextIcon className="w-6 h-6 mr-2 text-blue-400" />
          FashionForge User Guide
        </h2>
        <p className="text-lg mb-4 text-gray-300">
          For a comprehensive overview of all FashionForge features, workflow
          tips, and best practices for fashion design and collaboration,
          download our detailed user guide.
        </p>
        <Button
          variant="outline"
          asChild
          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
        >
          <a href="/fashionforge-user-guide.pdf" download>
            Download User Guide (PDF)
          </a>
        </Button>
      </section>
    </div>
  );
};

export default HelpPage;
