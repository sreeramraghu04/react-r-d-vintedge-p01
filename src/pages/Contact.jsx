export default function Contact() {
  return (
    <div className="p-6 sm:p-10 md:p-16 text-center min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-purple-400 font-bold mb-4">
        Contact Us
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
        Have questions or want to list your Vintage Cars? Reach out below.
      </p>
      <form className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
          rows="4"
        ></textarea>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold text-base sm:text-lg transition-all">
          Send Message
        </button>
      </form>
    </div>
  );
}
