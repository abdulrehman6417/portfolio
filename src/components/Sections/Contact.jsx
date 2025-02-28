import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        toast.success("Message Sent Successfully!", {
          theme: "dark",
          autoClose: 1500,
        });
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Oops! Something went wrong.", {
          theme: "dark",
          autoClose: 1500,
        });
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        {/* CONTACT FORM HERE */}

        <div className="px-4 w-[350px] sm:w-xl md:w-3xl  transition-all">
          <h2
            className="text-4xl font-bold bg-gradient-to-r from-red-400 to-violet-400 
         bg-clip-text text-transparent mb-5 text-center"
          >
            Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full"
            autoComplete="off"
          >
            {/* NAME FIELD */}

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/10 border-2 border-white/10 rounded-lg px-4 py-3 text-white transition 
                focus:outline-none focus:border-2 focus:border-purple-500 focus:bg-purple-900/50"
              />
            </div>

            {/* EMAIL FIELD */}

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/10 border-2 border-white/10 rounded-lg px-4 py-3 text-white transition 
                focus:outline-none focus:border-2 focus:border-purple-500 focus:bg-purple-900/50"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Let's discuss what's on your mind..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/10 border-2 border-white/10 rounded-lg px-4 py-3 text-white transition 
                focus:outline-none focus:border-2 focus:border-purple-500 focus:bg-purple-900/50"
              />
            </div>

            {loading ? (
              <button
                type="submit"
                className="w-full h-10 bg-violet-600 text-white  rounded-lg font-medium transition
              overflow-hidden relative hover:bg-violet-700 border-2 border-transparent hover:shadow-#0f82f666 hover:border-2 hover:scale-101 hover:border-violet-200 cursor-pointer"
              >
                <PulseLoader size={8} color="#ffffff" />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full h-10 bg-violet-600 text-white  rounded-lg font-medium transition
              overflow-hidden relative hover:bg-violet-700 border-2 border-transparent hover:shadow-#0f82f666 hover:border-2 hover:scale-101 hover:border-violet-200 cursor-pointer"
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
