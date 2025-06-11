"use client";
import { useState } from "react";
import Image from "next/image";

export default function HomeAndAbout() {
  const [isAbout, setIsAbout] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Buttons */}
      <nav className="bg-gray-900 text-white flex justify-center gap-6 py-4">
        <button
          className={`px-4 py-2 rounded ${
            !isAbout ? "bg-indigo-600" : "hover:bg-indigo-600"
          }`}
          onClick={() => setIsAbout(false)}
        >
          Home
        </button>
        <button
          className={`px-4 py-2 rounded ${
            isAbout ? "bg-indigo-600" : "hover:bg-indigo-600"
          }`}
          onClick={() => setIsAbout(true)}
        >
          About
        </button>
      </nav>

      {/* Home Page */}
      {!isAbout && (
        <>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
            <header className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Our Store 🛒
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Premium products at the best prices. Fast delivery and secure
                checkout!
              </p>
              <a
                href="#explore"
                className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
              >
                Explore Now
              </a>
            </header>
          </div>

          <section
            id="explore"
            className="py-16 px-6 bg-gray-100 text-center flex-1"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 mb-10">
              Check out our top-selling items handpicked just for you.
            </p>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow p-6">
                <Image
                  src="/assets/image/slick chair.jpg"
                  alt="Modern Chair"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto"
                />
                <h3 className="text-xl font-semibold mt-4">Modern Chair</h3>
                <p className="text-gray-600">
                  $199 - Ergonomic and stylish.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <Image
                  src="/assets/image/suggestion img 1.png"
                  alt="Wooden Table"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto"
                />
                <h3 className="text-xl font-semibold mt-4">Wooden Table</h3>
                <p className="text-gray-600">
                  $299 - Perfect for your dining space.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <Image
                  src="/assets/image/slick lamp.jpg"
                  alt="Smart Lamp"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto"
                />
                <h3 className="text-xl font-semibold mt-4">Smart Lamp</h3>
                <p className="text-gray-600">
                  $99 - Light up your life with smart tech.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* About Page */}
      {isAbout && (
        <div className="flex-1 bg-indigo-100 text-center py-16 px-6">
          <h1 className="text-4xl font-bold mb-6 text-indigo-700">About Us 🏢</h1>
          <p className="max-w-2xl mx-auto text-gray-800 text-lg">
            We are a passionate team delivering high-quality products to your
            doorstep. Our mission is to offer a seamless shopping experience
            with handpicked items, fast shipping, and trusted service.
          </p>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
}
