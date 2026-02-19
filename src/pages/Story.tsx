import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Github, Linkedin, Instagram } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { StoryItem } from '@/components/shared/StoryItem';
import { stories as allStories } from '@/lib/data';
import { Button } from '@/components/ui/button';

const socialButtons = [
  { name: 'GitHub', url: 'https://github.com/Amit-Shatagar', icon: Github, color: 'from-gray-700 to-gray-900' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/amitshetty18', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
  { name: 'Instagram', url: 'https://www.instagram.com/amit_shetty___', icon: Instagram, color: 'from-pink-500 to-purple-600' },
];

export function Story() {
  const [stories, setStories] = useState(allStories.slice(0, 10));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const currentLength = stories.length;
      const moreStories = allStories.slice(currentLength, currentLength + 5);
      if (moreStories.length > 0) {
        setStories([...stories, ...moreStories]);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Story"
        description="Welcome to my Stories section, where I share the journey of transforming raw data into meaningful insights. Here, you'll discover comprehensive case studies from my data analytics projects, detailed walkthroughs of complex data challenges I've solved, and the methodologies that drive successful business intelligence implementations.

In these stories, you'll find real-world applications of statistical analysis, machine learning models, and data visualization techniques. Each narrative explores the problem-solving process - from initial data exploration and hypothesis formulation to model development, validation, and deployment. I share the technical decisions, challenges faced, and innovative solutions that led to actionable business outcomes.

You'll learn about predictive analytics implementations, customer segmentation strategies, revenue optimization models, and fraud detection systems. My stories cover the entire data pipeline: data collection and cleaning, feature engineering, algorithm selection, performance evaluation, and production deployment.

Beyond technical implementations, these stories highlight the business impact of data-driven decisions. You'll see how data analytics influences strategic planning, operational efficiency, customer experience, and competitive advantage. Each case study demonstrates the ROI of analytics investments and the measurable improvements in key performance indicators.

I also share insights into emerging technologies and their practical applications. From cloud-based analytics platforms to automated machine learning tools, you'll stay updated on the latest trends shaping the data analytics landscape. My stories include code snippets, data visualizations, and architectural diagrams to provide complete technical context.

Whether you're a fellow data professional, a business stakeholder, or someone exploring data analytics, these stories offer valuable lessons in methodology, best practices, and real-world problem-solving. They showcase the power of data to drive innovation, optimize operations, and create competitive advantages in today's data-driven business environment.

Explore the intersection of technology and business strategy through my detailed project narratives, technical deep-dives, and lessons learned from implementing analytics solutions across various industries."
      />
      
      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-3 mb-8 -mt-2"
      >
        {socialButtons.map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.a
              key={button.name}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${button.color} text-white text-sm font-medium shadow-md hover:shadow-lg transition-shadow`}
            >
              <Icon className="w-4 h-4" />
              {button.name}
            </motion.a>
          );
        })}
      </motion.div>

      <section className="py-6 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Stories List */}
          <div>
            {stories.map((story, index) => (
              <StoryItem key={story.id} story={story} index={index} />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-8"
            >
              <Button
                onClick={loadMore}
                disabled={loading}
                variant="ghost"
                className="text-text-muted hover:text-text-primary text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Loading more stories...
                  </>
                ) : (
                  'Loading more stories...'
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
