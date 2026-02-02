import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaCopy, FaCheck } from "react-icons/fa";
import Section from "../layout/Section";
import { LINKS } from "../../constants";

const Contact = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(null); // 'email' | 'phone' | null

  const handleReveal = () => setIsRevealed(true);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Section id="contact" className="min-h-[50vh] flex items-center justify-center py-20">
      <div className="w-full max-w-4xl">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Ready to build something extraordinary? My inbox is always open for opportunities and collaborations.
          </p>
        </motion.div>

        {/* INTERACTIVE CONTAINER */}
        <div className="bg-bg-surface border border-line rounded-3xl overflow-hidden shadow-2xl relative transition-all duration-500">
          
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              /* STATE 1: REVEAL BUTTON */
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                className="p-16 text-center"
              >
                <button 
                  onClick={handleReveal}
                  className="px-12 py-5 bg-text-main text-bg-main font-bold text-xl rounded-full hover:bg-accent hover:text-bg-main transition-all transform hover:scale-105 shadow-lg shadow-accent/10"
                >
                  Say Hello
                </button>
              </motion.div>
            ) : (
              /* STATE 2: CONTACT CARDS */
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                
                {/* EMAIL CARD */}
                <ContactCard 
                  icon={<FaEnvelope />}
                  label="Email Address"
                  value={LINKS.email}
                  type="email"
                  copied={copied}
                  onCopy={() => handleCopy(LINKS.email, "email")}
                  link={`mailto:${LINKS.email}`}
                />

                {/* PHONE CARD */}
                <ContactCard 
                  icon={<FaPhone />}
                  label="Phone Number"
                  value={LINKS.phone}
                  type="phone"
                  copied={copied}
                  onCopy={() => handleCopy(LINKS.phone, "phone")}
                  link={`tel:${LINKS.phone}`}
                />

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </Section>
  );
};

// --- SUB-COMPONENT: CONTACT CARD ---
const ContactCard = ({ icon, label, value, type, copied, onCopy, link }) => {
  return (
    <div className="group relative bg-bg-main border border-line rounded-2xl p-8 flex flex-col items-center text-center hover:border-accent transition-colors duration-300">
      
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full bg-bg-surface border border-line flex items-center justify-center text-2xl text-text-muted group-hover:text-accent group-hover:border-accent transition-all mb-4">
        {icon}
      </div>

      <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
        {label}
      </h3>
      
      {/* Clickable Link for Direct Action */}
      <a 
        href={link} 
        className="text-lg md:text-xl font-mono font-bold text-text-main hover:text-accent transition-colors break-all"
      >
        {value}
      </a>

      {/* COPY BUTTON (Absolute Top Right) */}
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevent link click
          onCopy();
        }}
        className="absolute top-4 right-4 p-2 text-text-muted hover:text-accent transition-colors"
        title="Copy to clipboard"
      >
        {copied === type ? <FaCheck className="text-accent" /> : <FaCopy />}
      </button>

      {/* Copied Feedback Text */}
      <AnimatePresence>
        {copied === type && (
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 text-xs font-bold text-accent"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;