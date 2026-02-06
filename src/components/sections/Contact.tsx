'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className={styles.content}
        >
          <h2 className={styles.heading}>Ready to <span className={styles.highlight}>Debug</span> Your Team?</h2>
          <p className={styles.text}>
            I am currently available for new opportunities. Whether you have a question, 
            a bug to report, or just want to say hi, my inbox is always open.
          </p>

          <div className={styles.links}>
            <a href="mailto:email@example.com" className={styles.linkItem}>
              <Mail /> email@example.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
              <Linkedin /> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
              <Github /> GitHub
            </a>
          </div>

          <a href="mailto:email@example.com" className={styles.cta}>
            <Send size={18} /> Send Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
