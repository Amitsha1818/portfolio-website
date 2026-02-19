import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { footerLinks } from '@/lib/data';
import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-text-muted text-sm mb-4"
        >
          &copy;2019 - 26, realshetty <span className="mx-1 text-accent-purple">&#10022;</span> Amit Shetty
        </motion.p>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              className="text-text-muted text-sm hover:text-text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-text-muted text-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>stay hungry, stay foolish</span>
          <Sparkles className="w-3.5 h-3.5" />
        </motion.div>
      </div>
    </footer>
  );
}
