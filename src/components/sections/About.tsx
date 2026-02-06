'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  TestTube2, 
  Workflow, 
  Bug
} from 'lucide-react';
import styles from './About.module.scss';

const skills = [
  {
    category: 'Automation',
    icon: <TestTube2 size={24} />,
    items: ['Selenium', 'Cypress', 'Playwright', 'Appium']
  },
  {
    category: 'Manual & Strategy',
    icon: <Bug size={24} />,
    items: ['Test Planning', 'Jira / Xray', 'Exploratory Testing', 'Root Cause Analysis']
  },
  {
    category: 'CI/CD & Tools',
    icon: <Workflow size={24} />,
    items: ['Jenkins', 'GitHub Actions', 'Docker', 'Postman']
  },
  {
    category: 'Languages',
    icon: <Code2 size={24} />,
    items: ['TypeScript/JavaScript', 'Python', 'Java', 'SQL']
  }
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.intro}
        >
          <h2 className={styles.heading}>
            <span className={styles.highlight}>About</span> The Hunter
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

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.skillCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {skill.icon}
                </div>
                <h3 className={styles.cardTitle}>{skill.category}</h3>
              </div>
              <ul className={styles.list}>
                {skill.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
