import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // ✅ MongoDB backend
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const formData = new FormData();
      formData.append("access_key", "4c7a7c51-ea05-4890-982c-5412453a7007");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent to Email & Database! ✅");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Saved in DB, but Email failed ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message ❌");
    }
  };

  return (
    <div
      id="contact"
      className="mx-auto max-w-7xl bg-gradient-to-b from-slate-950 to-slate-950 rounded-xl shadow-lg py-24 px-6 md:px-20 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-slate-900 w-full px-4 py-2 border border-gray-700 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-slate-900 w-full px-4 py-2 border border-gray-700 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="bg-slate-900 w-full px-4 py-2 border border-gray-700 rounded-lg"
        ></textarea>

        <button className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600">
          Send Message
        </button>

        {status && (
          <p className="text-center mt-4 text-green-400">{status}</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
