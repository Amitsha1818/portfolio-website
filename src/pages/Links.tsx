import { motion } from 'framer-motion';
import { ExternalLink, Box, Mail, Palette, Instagram, Linkedin, Github, Dribbble, BookOpen } from 'lucide-react';
import { socialLinks } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Box,
  Mail,
  Palette,
  Instagram,
  Linkedin,
  Github,
  Dribbble,
  BookOpen,
};

const featuredProjectsData = [
  { name: '3dicons', url: 'https://3dicons.co', icon: 'Box', color: 'from-pink-400 to-rose-500' },
  { name: 'Designletter', url: 'https://designletter.co', icon: 'Mail', color: 'from-blue-400 to-indigo-500' },
  { name: 'Illlustrations', url: 'https://illlustrations.co', icon: 'Palette', color: 'from-amber-400 to-orange-500' },
];

export function Links() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            {/* Avatar */}
            <motion.div 
              className="relative inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="src/Pictures/Profile.jpeg"
                alt="Amit Shetty"
                className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </motion.div>

            {/* Name */}
            <h1 className="font-script text-3xl text-text-primary dark:text-text-primary mb-3 relative inline-block">
              realvjy
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-blue rounded-full" />
            </h1>

            {/* Bio */}
            <p className="text-text-secondary dark:text-text-secondary text-sm mt-4 leading-relaxed">
              Design wizard who code <span className="text-accent-purple mx-1">&#10022;</span> Love to create illustration, 3D, XR stuff <span className="text-accent-purple mx-1">&#10022;</span> Now making game
            </p>

            {/* Studio */}
            <p className="text-text-muted text-sm mt-2">
              Currently building what I love{' '}
              <a
                href="https://overlayz.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-purple hover:underline font-medium"
              >
                @overlayz
              </a>{' '}
              studio
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-2 mb-8"
          >
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border/80 hover:shadow-sm transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Featured Banner */}
          <motion.a
            href="https://handkit.design"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="block rounded-xl overflow-hidden mb-8 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=300&fit=crop"
              alt="Ghost Hand Kit"
              className="w-full h-28 object-cover"
            />
          </motion.a>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-medium text-center mb-4">
              Featured Projects
            </h2>
            <div className="space-y-2.5">
              {featuredProjectsData.map((project, index) => {
                const Icon = iconMap[project.icon];
                return (
                  <motion.a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 3 }}
                    className="flex items-center justify-between p-3.5 bg-background rounded-xl border border-border hover:border-border/80 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-text-primary text-sm">{project.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* More Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-medium text-center mb-4">
              More
            </h2>
            <div className="space-y-2.5">
              <motion.a
                href="https://realvjy.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.45 }}
                whileHover={{ x: 3 }}
                className="flex items-center justify-between p-3.5 bg-background rounded-xl border border-border hover:border-border/80 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <span className="text-sm font-bold">G</span>
                  </div>
                  <span className="font-medium text-text-primary text-sm">Gumroad Store</span>
                </div>
                <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-text-primary transition-colors" />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-center justify-between p-3.5 bg-background rounded-xl border border-border opacity-60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <span className="text-xs font-bold">Itch</span>
                  </div>
                  <span className="font-medium text-text-primary text-sm">itch.io (Soon)</span>
                </div>
                <span className="text-[10px] text-text-muted bg-muted px-2 py-0.5 rounded-full">WIP</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12 pt-8 border-t border-border"
          >
            <p className="text-text-muted text-sm">
              Website (vjy.me)
            </p>
            <p className="text-text-primary font-medium mt-1 text-sm">
              &copy; realvjy <span className="text-accent-purple mx-1">&#10022;</span> vijay verma
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
