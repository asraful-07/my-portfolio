import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

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
    <div className="bg-gray-800 text-white py-8 px-4 container mx-auto">
      <Helmet>
        <title>My-Portfolio || Contact</title>
      </Helmet>
      {/* Connect Information */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4">Connect With Me</h1>
        <div className="divider border-t-2 border-gray-500 mx-auto my-4 w-1/4"></div>
        <p className="text-lg text-gray-300 mb-6">
          If you're interested in collaborating, discussing a project, or simply
          want to say hello, I'd love to hear from you. Feel free to reach out
          using any of the methods below:
        </p>
        <h4 className="text-xl font-medium">asraful0508@gmail.com</h4>
        <h4 className="text-xl font-medium">+8801603302374</h4>
        <p className="text-lg text-gray-400">Rajshahi, Bangladesh</p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Contact Me
        </h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              name="message"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              value="Send"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
