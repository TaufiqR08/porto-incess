'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  TestTube2, 
  Workflow, 
  Bug
} from 'lucide-react';
import styles from './Skills.module.scss';

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

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.heading}>
            Technical <span className={styles.highlight}>Arsenal</span>
          </h2>
          <p className={styles.subtitle}>
            Tools and technologies I use to ensure quality at every level
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
