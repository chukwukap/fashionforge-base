"use client";
import React from "react";
import Image from "next/image";

export default function WelcomeStep() {
  return (
    <div className="text-center">
      <Image
        src="/logo.svg"
        alt="FashionForge Logo"
        width={150}
        height={150}
        className="mx-auto mb-6"
      />
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Welcome to FashionForge
      </h2>
      <p className="mb-4 text-gray-600">
        FashionForge is a revolutionary platform connecting fashion designers
        with clients. Whether you&apos;re a designer looking to showcase your
        talent or a client seeking unique designs, you&apos;re in the right
        place.
      </p>
      <p className="text-gray-600">
        Let&apos;s get started with setting up your account!
      </p>
    </div>
  );
}
