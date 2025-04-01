import React from "react";
import fullllogo from "../assets/fulllogo.png"

const QuickLinks = ({ links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactInfo = ({ contactDetails }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
    <ul className="space-y-2 text-gray-400">
      {contactDetails.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const SubscribeSection = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
    <p className="text-gray-400 mb-4">
      Join our newsletter for updates and special offers.
    </p>
    <div className="flex">
      <input
        type="email"
        placeholder="Your email"
        className="px-4 py-2 rounded-l-md focus:outline-none text-gray-900 w-full"
      />
      <button className="rounded-l-none bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-2">
        Subscribe
      </button>
    </div>
  </div>
);

const Footer = () => {
  const quickLinks = [
    { text: "Home", href: "#" },
    { text: "Features", href: "#features" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "Contact", href: "#contact" },
  ];

  const contactDetails = [
    "123 HM Bakers",
    "Karachi, 74400",
    "info@hmbakers.com",
    "(123) 456-7890",
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={fullllogo} // Or replace this with your logo path
              alt="Company Logo"
              className="w-30 mb-4"
            />
            <p className="text-gray-400">
              Handcrafted cookies made with love and premium ingredients.
            </p>
          </div>

          <QuickLinks links={quickLinks} />
          <ContactInfo contactDetails={contactDetails} />
          <SubscribeSection />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} HM Bakers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
