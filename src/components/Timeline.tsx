"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  title: string
  description: string
  year?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500" />
      
      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative flex items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className="inline-block p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all hover-lift w-full">
                {item.year && (
                  <span className="inline-block px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3">
                    {item.year}
                  </span>
                )}
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
            
            <div className="absolute left-3 md:left-1/2 -ml-2 md:-ml-3 flex items-center justify-center">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary border-2 md:border-4 border-background shadow-lg" />
            </div>
            
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
