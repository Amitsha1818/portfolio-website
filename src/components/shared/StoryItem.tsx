import { motion } from 'framer-motion';
import type { Story } from '@/types';

interface StoryItemProps {
  story: Story;
  index?: number;
}

const categoryColors: Record<string, string> = {
  Devlog: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Blog: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Insight: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
};

export function StoryItem({ story, index = 0 }: StoryItemProps) {
  return (
    <motion.a
      href={story.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group block py-4 border-b border-border last:border-b-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-text-muted text-xs">{story.date}</span>
            <span className="text-border">&bull;</span>
            <span className={`text-[10px] uppercase font-medium px-2 py-0.5 rounded-full ${categoryColors[story.category] || 'bg-muted text-text-muted'}`}>
              {story.category}
            </span>
          </div>
          <h3 className="font-serif text-lg text-text-primary dark:text-text-primary group-hover:text-accent-purple transition-colors line-clamp-2 leading-snug">
            {story.title}
          </h3>
        </div>
        <span className="text-text-muted text-xs flex-shrink-0 hidden sm:block opacity-60">
          story.vjy.me
        </span>
      </div>
    </motion.a>
  );
}
