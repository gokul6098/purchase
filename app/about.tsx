import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us 🏢</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We are a passionate team delivering high-quality products to your doorstep. 
          Our goal is to make your online shopping experience smooth, affordable, and reliable.
        </p>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12 px-6 max-w-4xl mx-auto text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          To provide premium quality furniture and home essentials at competitive prices,
          supported by fast delivery and dedicated customer service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Top-rated products handpicked by design experts</li>
          <li>100% secure checkout process</li>
          <li>Fast and reliable shipping</li>
          <li>Friendly and responsive support team</li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
}
