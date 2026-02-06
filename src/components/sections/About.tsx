'use client';

import { motion } from 'framer-motion';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <h2 className={styles.heading}>
            <span className={styles.highlight}>About</span> Me
          </h2>
          <p className={styles.text}>
            I am a detail-oriented Quality Assurance Engineer with a passion for breaking things 
            so that users don&apos;t have to. With a strong background in both manual and automated testing, 
            I bridge the gap between development logic and user experience.
          </p>
          <p className={styles.text}>
            My philosophy is simple: <strong>Quality is not an act, it is a habit.</strong> 
            I build robust test frameworks that scale with the application, ensuring every release 
            is confident and bug-free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
