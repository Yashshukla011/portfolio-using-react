import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase.js"; 

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {

      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date()
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
        setStatus("Firebase saved, but Email failed.");
      }

    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <div id="contact" className="mx-auto max-w-full max-w-2xl mt-10 p-8 bg-gray-800 rounded-xl shadow-lg py-24 px-6 md:px-20 bg-gradient-to-b from-slate-950 to-slate-950 text-white m-5 ">
      <h2 className="text-3xl font-bold text-center mb-6 text-white ">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-white bg-slate-900 w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-white bg-slate-900 w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="text-white bg-slate-900 w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Send Message
        </button>
        {status && (
          <p className={`text-center mt-4 ${status.includes("Error") ? "text-red-400" : "text-green-400"}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;