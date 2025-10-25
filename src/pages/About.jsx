import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-slate-900 to-black text-white py-25 px-10 sm:px-15 lg:p-28">
      <section className="max-w-4xl mx-auto text-center">
        <Helmet>
          <title>About - VintEdge</title>
        </Helmet>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Where Classics Meet the Future
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8">
          Discover, admire, and collect timeless vintage cars — beautifully
          preserved and digitally reimagined.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-12 grid gap-6 sm:gap-8">
        <div className="bg-white/5 p-4 sm:p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Our Mission
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            We celebrate the golden age of automobiles by bringing classic car
            collections into the modern digital space.
          </p>
        </div>

        <div className="bg-white/5 p-4 sm:p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            What We Offer
          </h2>
          <ul className="text-slate-300 leading-relaxed text-sm sm:text-base list-disc list-inside space-y-1 sm:space-y-2">
            <li>Showcase of legendary vintage cars from different eras.</li>
            <li>Detailed specs, history, and restoration insights.</li>
            <li>Immersive gallery with smooth, futuristic UI.</li>
            <li>Community of collectors and car enthusiasts.</li>
          </ul>
        </div>

        <div className="bg-white/5 p-4 sm:p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Get Involved
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-2">
            Want to list a vehicle or partner with us? We welcome sellers,
            mechanics, and eco-focused organizations.
          </p>
          <a
            href="/contact"
            className="inline-block px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 font-medium shadow-md text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
