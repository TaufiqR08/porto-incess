'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Code2
} from 'lucide-react';
import styles from './Projects.module.scss';
import Link from 'next/link';

const projects = [
  {
    id: 'PRJ-001',
    title: 'FinTech Payment Gateway Regression',
    type: 'Automation Testing',
    desc: 'Designed a comprehensive E2E test suite for a critical payment gateway integration, reducing regression time by 70%.',
    stack: ['Cypress', 'JavaScript', 'Jenkins', 'PostgreSQL'],
    stats: {
      bugs: 24,
      coverage: '96%',
      time: '-5h/run'
    },
    snippet: `describe('Payment Flow', () => {
  it('should process valid transaction', () => {
    cy.visit('/checkout');
    cy.fillCardDetails(testUser.card);
    cy.get('#pay-btn').click();
    cy.wait('@paymentApi').its('status').should('eq', 200);
    cy.url().should('include', '/success');
  });
});`
  },
  {
    id: 'PRJ-002',
    title: 'Healthcare Mobile App API Stress Test',
    type: 'Performance Testing',
    desc: 'Conducted load testing for a telemedicine app handling 50k+ concurrent users. Identified bottlenecks in the appointment scheduling microservice.',
    stack: ['k6', 'Grafana', 'Docker', 'AWS'],
    stats: {
      bugs: 12,
      concurrency: '50k+',
      latency: '<200ms'
    },
    snippet: `export default function () {
  const payload = JSON.stringify({
    patientId: '12345',
    slotId: 'slot_99'
  });
  
  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  http.post(url, payload, params);
}`
  },
  {
    id: 'PRJ-003',
    title: 'E-Commerce Accessibility Audit',
    type: 'Manual & Compliance',
    desc: 'Performed a full WCAG 2.1 AA audit on a major retail platform. Documented violations and worked with developers to implement semantic HTML fixes.',
    stack: ['NVDA', 'Axe', 'Lighthouse', 'WCAG'],
    stats: {
      issues: 156,
      score: '98/100',
      compliance: 'AA'
    },
    snippet: `<!-- Remediation Example -->
<button 
  aria-label="Add to Cart"
  aria-expanded="false"
  class="btn-primary"
>
  <span class="icon-cart"></span>
  <span>Add to Cart</span>
</button>`
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <div className={styles.label}>Case Studies</div>
          <h2 className={styles.heading}>The Defect Report</h2>
          <p className={styles.subtitle}>
            Real world examples of how ensure quality and stability.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.ticketId}>
                  <AlertCircle size={16} />
                  {project.id}
                </div>
                <div className={styles.ticketType}>{project.type}</div>
              </div>
              
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                
                <div className={styles.stack}>
                  {project.stack.map(tech => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>

                <div className={styles.statsRow}>
                  {Object.entries(project.stats).map(([label, value]) => (
                    <div key={label} className={styles.stat}>
                      <span className={styles.statValue}>{value}</span>
                      <span className={styles.statLabel}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.codeWindow}>
                <div className={styles.codeHeader}>
                  <Code2 size={14} />
                  <span>test_snippet.js</span>
                </div>
                <pre className={styles.codeBlock}>
                  <code>{project.snippet}</code>
                </pre>
              </div>

              <div className={styles.cardFooter}>
                <Link href="#" className={styles.detailsBtn}>
                  View Full Report <ExternalLink size={16} />
                </Link>
                <div className={styles.status}>
                  <CheckCircle2 size={18} />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
