import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t2e8itk", "8K4ZniIgYAX7HgzQG", form.current, {
        publicKey: "8K4ZniIgYAX7HgzQG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <Helmet>
        <title>My-Portfolio || Contact</title>
      </Helmet>

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
          Get In Touch
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Contact Information */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-900/50 rounded-lg">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">asraful0508@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-900/50 rounded-lg">
                  <FaPhone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+8801603302374</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-900/50 rounded-lg">
                  <FaMapMarkerAlt className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Rajshahi, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-indigo-600 rounded-full transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-indigo-600 rounded-full transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-indigo-600 rounded-full transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-indigo-600 rounded-full transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message <FiSend className="text-xl" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
