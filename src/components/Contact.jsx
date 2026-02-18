import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaMessage } from "react-icons/fa6";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Processing your request...");

    try {
      // 1. Database Update (MongoDB)
      // Note: Production mein localhost ki jagah apni API ka URL use karein
      const dbPromise = fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Email Service (Web3Forms)
      const emailFormData = new FormData();
      emailFormData.append("access_key", "4c7a7c51-ea05-4890-982c-5412453a7007");
      emailFormData.append("name", formData.name);
      emailFormData.append("email", formData.email);
      emailFormData.append("message", formData.message);

      const emailPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: emailFormData,
      });

      // Dono requests ko parallel chalana behtar hai
      const [dbRes, emailRes] = await Promise.all([dbPromise, emailPromise]);
      const emailData = await emailRes.json();

      if (emailData.success) {
        setStatus("Message sent successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Saved in DB, but email delivery failed. ⚠️");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again later. ❌");
    } finally {
      setIsSubmitting(false);
      // Status message ko 5 seconds baad hata dega
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">Have a project in mind? Let's build something amazing together.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
              <div className="relative group">
                <FaMessage className="absolute left-4 top-5 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-white transition-all shadow-lg shadow-indigo-500/20 ${
                isSubmitting ? "bg-slate-800 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FaPaperPlane className={isSubmitting ? "animate-pulse" : ""} />
            </motion.button>

            {status && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className={`text-center font-medium mt-4 ${status.includes('successfully') ? 'text-green-400' : 'text-amber-400'}`}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;