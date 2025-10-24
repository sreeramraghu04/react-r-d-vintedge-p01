/* export default function About() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl text-purple-400 font-bold mb-4">
        About E-DriveX
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        E-DriveX is a futuristic platform connecting eco-conscious drivers with
        reliable used electric cars. Drive smarter, go greener, and embrace the
        future of mobility.
      </p>
    </div>
  );
}
 */
import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-slate-900 to-black text-white py-16 px-6 sm:px-12 lg:px-24">
      <section className="max-w-4xl mx-auto text-center">
        <Helmet>
          <title>about-vintedge</title>
        </Helmet>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Where Classics Meet the Future
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 mb-8">
          Discover, admire, and collect timeless vintage cars — beautifully
          preserved and digitally reimagined.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-12 grid gap-8">
        <div className="bg-white/5 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-slate-300 leading-relaxed">
            We celebrate the golden age of automobiles by bringing classic car
            collections into the modern digital space. RetroVerse connects
            enthusiasts with rare and iconic vehicles, preserving their stories
            for generations to come.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <ul className="text-slate-300 leading-relaxed list-disc list-inside space-y-2">
            <li>Showcase of legendary vintage cars from different eras.</li>
            <li>Detailed specs, history, and restoration insights.</li>
            <li>Immersive gallery with smooth, futuristic UI.</li>
            <li>Community of collectors and car enthusiasts.</li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Get Involved</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Want to list a vehicle or partner with us? We welcome sellers,
            mechanics, and eco-focused organizations — together we accelerate
            the shift to cleaner roads.
          </p>
          <a
            href="/contact"
            className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 font-medium shadow-md"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
