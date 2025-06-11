import { useRef } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e)=> {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_orhdfzm',    // Replace with your actual Service ID
        'template_z6cfe4p',   // Replace with your actual Template ID
        form.current,
        's9_MDNP88Lji9CJV0'     // Replace with your actual Public Key
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send email. Try again later.');
          console.error(error);
        }
      );
  }

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3>Let's Talk</h3>
            <p>
              I'm open to discuss web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
                <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                <a href="mailto:baratamragahvendra@gmail.com" className="hover:undeline">
                    baratamragahvendra@gmail.com
                </a>
            </div>
            <div className="mb-4">
                <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                <span>+91 8341324536</span>
            </div>
            <div className="mb-4">
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                <div className="block mb-2">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter your Name"/>
                </div>
                <div className="block mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter your Email"/>
                </div>
                <div className="block mb-2">
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter your message" rows="5"/>
                <button className="mt-10 bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">Send</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
