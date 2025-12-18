
export default function Contact() {
  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Book an appointment or ask us anything. We’re here to help!
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows="4"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
