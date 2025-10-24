export default function Contact() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl text-purple-400 font-bold mb-4">Contact Us</h2>
      <p className="text-gray-300 mb-6">
        Have questions or want to list your EV? Reach out below.
      </p>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg text-black"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg text-black"
          rows="4"
        ></textarea>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold">
          Send Message
        </button>
      </form>
    </div>
  );
}
