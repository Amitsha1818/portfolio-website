import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';

export function About() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About"
        description="Little about me. Also, It's not that hard to find my contact just search realvjy."
      />
      
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Desk Setup Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=675&fit=crop"
                alt="What's on my desk"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              {/* Annotation dots */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-white rounded-full shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
                </div>
                <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-white rounded-full shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
                </div>
                <div className="absolute bottom-[35%] left-[35%] w-3 h-3 bg-white rounded-full shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
                </div>
              </div>
            </div>
            <p className="text-center text-text-muted text-[10px] uppercase tracking-[0.2em] mt-3">
              what's on my desk
            </p>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* What's on my desk section */}
            <div>
              <h2 className="font-medium text-text-primary dark:text-text-primary mb-3 text-base">what's on my desk</h2>
              <p className="text-text-secondary dark:text-text-secondary leading-relaxed text-sm">
                As a digital artist, I have been bringing a splash of color to the
                internet for years through my illustrations and designs. I assist
                brands in developing their visual identity and design language to
                make their products more appealing and accessible. Currently, I am
                building design tools and resources{' '}
                <a
                  href="https://overlayz.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-purple hover:underline"
                >
                  @overlayz
                </a>
                . In my spare time, I love sharing my learnings and open-source
                design resources to help my fellow designers, developers, and
                enthusiasts.
              </p>
              <p className="text-text-secondary dark:text-text-secondary leading-relaxed mt-4 text-sm">
                Previously I worked for companies like - Zomato, Eversend,
                Stickermule, Razorpay and many more.{' '}
                <a
                  href="/work"
                  className="text-accent-purple hover:underline inline-flex items-center gap-1"
                >
                  All work here
                  <ExternalLink className="w-3 h-3" />
                </a>
                .
              </p>
            </div>

            {/* Current section */}
            <div>
              <h2 className="font-medium text-text-primary dark:text-text-primary mb-3 text-base">Current</h2>
              <p className="text-text-secondary dark:text-text-secondary leading-relaxed text-sm">
                Currently, I work from my studio as an independent contractor,
                helping brands develop effective visuals and design systems. In my
                studio, I spend most of my time building design tools and
                resources, with a focus on 3D and XR, while experimenting with new
                tools and trends. Now, I am focusing on game dev to create my own
                game.
              </p>
            </div>

            {/* Contact section */}
            <div>
              <h2 className="font-medium text-text-primary dark:text-text-primary mb-3 text-base">
                Contact & Social Media Links
              </h2>
              <p className="text-text-secondary dark:text-text-secondary leading-relaxed text-sm">
                You can find me on everywhere with handle{' '}
                <span className="font-medium text-text-primary dark:text-text-primary">@realvjy</span>.
                Also see all social links here{' '}
                <a
                  href="/links"
                  className="text-accent-purple hover:underline inline-flex items-center gap-1"
                >
                  vjy.me/links
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p className="text-text-secondary dark:text-text-secondary leading-relaxed mt-4 text-sm">
                For partnerships, collaborations, sponsorships, commissions,
                events, you can reach out to me at{' '}
                <a
                  href="mailto:hi@vjy.me"
                  className="text-accent-purple hover:underline"
                >
                  hi@vjy.me
                </a>{' '}
                or{' '}
                <a
                  href="https://twitter.com/realvjy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-purple hover:underline inline-flex items-center gap-1"
                >
                  tweet
                  <ExternalLink className="w-3 h-3" />
                </a>
                .
              </p>
              <p className="text-text-muted text-xs mt-4">
                PS: I'll reply back to email in 1-2 working days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
