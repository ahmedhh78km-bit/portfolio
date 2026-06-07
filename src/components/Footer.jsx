import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/ahmedhh78km-bit",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ahmed-khairy-344950365/",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/201050472499",
    },
  ];

  return (
    <footer className="w-full bg-primary relative overflow-hidden">
      {/* Top glow effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 sm:px-16 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Name and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-3xl font-bold mb-2">Ahmed</h3>
            <p className="text-secondary text-lg">
              © {currentYear} Ahmed. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                <motion.div
                  className="text-4xl"
                  whileHover={{
                    textShadow: "0 0 25px rgba(6, 182, 212, 0.8)",
                  }}
                >
                  {social.icon}
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <p className="text-secondary text-lg">
              Built with React & Three.js
            </p>
          </div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
