"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-[#FF9A25] mb-6">Get In Touch</h2>
        <p className="text-gray-600">We&quot;d love to hear from you! Fill out the form below and we'll get back to you shortly.</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-lg mx-auto mt-8 bg-white p-6 shadow-xl rounded-xl border border-gray-200"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input type="text" className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-[#FF9A25] focus:outline-none" placeholder="Your Name" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input type="email" className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-[#FF9A25] focus:outline-none" placeholder="Your Email" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-[#FF9A25] focus:outline-none" rows={4} placeholder="Your Message"></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#FF9A25] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#e68a1e] transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
