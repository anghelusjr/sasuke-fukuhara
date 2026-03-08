import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formspree.io/f/xvzwgblj",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("Thank you! Your message has been sent.");
        e.target.reset();
      } else {
        setStatus("Oops! There was a problem sending your message.");
      }
    } catch (error) {
      setStatus("Oops! There was a problem sending your message.");
    }
  };

  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6"> Book an appointment or ask anything. I'm here to help!</h2>
        <p className="text-gray-600 mb-8">
          Submit your appointment request below. The owner will contact you to
          confirm the schedule depending on availability.
        </p>
        <p className="text-gray-600 mb-8">
          Email Address: <strong>madjehsasuke@gmail.com</strong>
          <br />
          Phone Number: <strong>09937422193</strong>
        </p>

<form className="flex flex-col gap-4" onSubmit={handleSubmit}>

  {/* Email customization for Formspree */}
  <input type="hidden" name="_subject" value="New Appointment Request" />
  <input type="hidden" name="_from" value="Sasuke Fukuhara Salon <madjehsasuke@gmail.com>" />
  <input type="hidden" name="_replyto" value="" /> {/* value will be filled dynamically from email input */}

  <input
    type="text"
    placeholder="Your Name"
    name="name"
    required
    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
  />

  <input
    type="email"
    placeholder="Your Email"
    name="email"
    required
    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
  />

  <input
    type="tel"
    placeholder="Your Mobile"
    name="mobile"
    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
  />

  <div className="flex flex-col items-start gap-2 p-3 border border-gray-300 rounded-lg">
    <p className="font-semibold text-gray-700 mb-1">Select Services:</p>
    <label className="flex items-center gap-2">
      <input type="checkbox" name="services[]" value="Hair Rebond" />
      Hair Rebond
    </label>

    <label className="flex items-center gap-2">
      <input type="checkbox" name="services[]" value="Curly Settings" />
      Curly Settings
    </label>

    <label className="flex items-center gap-2">
      <input type="checkbox" name="services[]" value="Hair Coloring" />
      Hair Coloring
    </label>

    <label className="flex items-center gap-2">
      <input type="checkbox" name="services[]" value="Hair Treatment" />
      Hair Treatment
    </label>
  </div>

  <textarea
    name="details"
    placeholder="Any specific request or description for your service"
    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
    rows="4"
  />

  <button
    type="submit"
    className="cursor-pointer bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
  >
    Send Message
  </button>
</form>

        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </div>
    </section>
  );
}