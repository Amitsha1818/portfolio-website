import { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid3X3, List } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { AppIcon } from '@/components/shared/AppIcon';
import { apps, devices } from '@/lib/data';

export function Stack() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Tech Stack"
        description="The following is my on-the-go app stack for designing, coding, managing, entertaining, and all..."
      />
      
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* View Toggle */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className={`text-xs ${viewMode === 'grid' ? 'text-text-primary' : 'text-text-muted'}`}>
              Grid
            </span>
            <div className="flex items-center gap-1 bg-muted rounded-full p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'grid'
                    ? 'bg-background shadow-sm text-accent-purple'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'list'
                    ? 'bg-background shadow-sm text-accent-purple'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <span className={`text-xs ${viewMode === 'list' ? 'text-text-primary' : 'text-text-muted'}`}>
              List
            </span>
          </div>

          {/* Apps Section */}
          <div className="mb-12">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-medium text-center mb-6">
              Apps and Games
            </h2>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-5 gap-3">
                {apps.map((app, index) => (
                  <AppIcon key={app.id} app={app} index={index} />
                ))}
              </div>
            ) : (
              <div className="space-y-1">
                {apps.map((app, index) => (
                  <motion.a
                    key={app.id}
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.01 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 text-sm font-bold"
                      style={{ backgroundColor: app.color }}
                    >
                      {app.name.slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-text-primary">{app.name}</p>
                      <p className="text-xs text-text-muted">{app.category}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          {/* Devices Section */}
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-medium text-center mb-6">
              Devices
            </h2>

            <div className="grid grid-cols-5 gap-3">
              {devices.map((device, index) => (
                <AppIcon key={device.id} device={device} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
