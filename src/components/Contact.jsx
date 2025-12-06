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
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date()
      });
      console.log("Document ID:", docRef.id); 
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="max-w-md mx-auto w-300 mt-10 p-8 bg-gray-800 rounded-xl shadow-lg m-20">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
        
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Send Message
        </button>
        {status && <p className="text-center text-gray-700 mt-2">{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
