import { motion } from "framer-motion";

const Section = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Section;