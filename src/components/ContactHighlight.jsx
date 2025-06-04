"use client";
import { motion } from "motion/react";
import { ContactHightlight, Highlight } from "./ui/contact-highlight";
import ContactFormMockup from "./ContactForm";

export function ContactHero() {
  return (
    <ContactHightlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl mb-7 px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
        Your Next Tech Partner <br className="md:hidden"/> Is One Message Away <br/>
        <Highlight className="text-black dark:text-white font-langits tracking-wider">
          Contact Us
        </Highlight>
      </motion.h1>
        <ContactFormMockup />
    </ContactHightlight>
  );
}
