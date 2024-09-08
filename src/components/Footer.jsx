import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Part */}
          <div className="flex flex-col justify-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-6">
              Feel free to reach out to me via phone, email, or connect with me on LinkedIn and GitHub.
            </p>
          </div>

          {/* Right Part - Social Icons and Contact Info */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6">
              <a href="https://github.com/Abivarsan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-8 h-8 hover:text-gray-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/abivarsan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-8 h-8 hover:text-gray-400 transition-colors" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-end space-y-2">
              <a href="tel:+94763803712" className="flex items-center text-lg hover:text-gray-400">
                <FaPhone className="mr-2" /> +(94) 76 380 3712
              </a>

              <a href="mailto:ketheewaranabivarsan@gmail.com" className="flex items-center text-lg hover:text-gray-400">
                <FaEnvelope className="mr-2" /> ketheewaranabivarsan@gmail.com
              </a>

              <a
                href="https://maps.app.goo.gl/mpP8q7gGjjv8Gwq4A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg hover:text-gray-400"
              >
                <FaMapMarkerAlt className="mr-2" /> Home Town: Jaffna, Current Town: Moratuwa
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
