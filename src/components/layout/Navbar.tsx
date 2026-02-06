'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bug } from 'lucide-react';
import styles from './Navbar.module.scss';
import clsx from 'clsx';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(styles.navbar, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Bug className={styles.icon} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>Frisca Febriyani Kurniawan</span>
            <span className={styles.logoTitle}>QA Engineer</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" className={styles.resumeBtn}>
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="/resume.pdf" target="_blank" className={styles.mobileResumeBtn}>
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
