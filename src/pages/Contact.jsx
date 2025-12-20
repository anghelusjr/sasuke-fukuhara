export default function Contact() {
  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Book an appointment or ask anything. I'm here to help!
          </p>
         <p className="text-gray-600 mb-8">
         Email Address: <strong>madjehsasuke@gmail.com</strong><br/>
         Phone Number: <strong>09967422193</strong>
         </p>
        <form className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* Services - Checkboxes */}
          <div className="flex flex-col items-start gap-2 p-3 border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-700 mb-1">Select Services:</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="services" value="Hair Rebond" />
              Hair Rebond
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="services" value="Curly Settings" />
              Curly Settings
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="services" value="Hair Coloring" />
              Hair Coloring
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="services" value="Hair Treatment" />
              Hair Treatment
            </label>
          </div>

          {/* Specific Description / Request */}
          <textarea
            name="details"
            placeholder="Any specific request or description for your service"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            rows="4"
          />

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
