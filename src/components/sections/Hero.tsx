'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import styles from './Hero.module.scss';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <div className={styles.badge}>
            <ShieldCheck size={16} />
            <span>QA Engineer</span>
          </div>
          
          <h1 className={styles.title}>
            Breaking Code <br />
            <span className={styles.highlight}>To Make It Perfect.</span>
          </h1>
          
          <p className={styles.subtitle}>
            I help developers build bug-free, robust software through 
            strategic testing and efficient automation.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="#projects" className={styles.primaryBtn}>
              View Case Studies
            </Link>
            <Link href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Test Cases</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLabel}>Bug Catch Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>CI/CD</span>
              <span className={styles.statLabel}>Pipeline Integrated</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.visual}
        >
          <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
              <div className={styles.dot} style={{ background: '#ff5f56' }} />
              <div className={styles.dot} style={{ background: '#ffbd2e' }} />
              <div className={styles.dot} style={{ background: '#27c93f' }} />
              <span className={styles.terminalTitle}>test_runner.sh</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.line}>
                <span className={styles.prompt}>$</span> npm run test:e2e
              </div>
              <div className={styles.line}>
                <span className={styles.info}>Running 42 tests using Cypress...</span>
              </div>
              <br />
              <div className={styles.line}>
                <span className={styles.success}>✓</span> Login Flow <span className={styles.time}>(1240ms)</span>
              </div>
              <div className={styles.line}>
                <span className={styles.success}>✓</span> Payment Gateway <span className={styles.time}>(3400ms)</span>
              </div>
              <div className={styles.line}>
                <span className={styles.success}>✓</span> API Integration <span className={styles.time}>(850ms)</span>
              </div>
              <br />
              <div className={styles.line}>
                <span className={styles.success}>All specs passed!</span>
              </div>
              <div className={styles.cursor} />
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className={styles.gridBackground} />
    </section>
  );
}
