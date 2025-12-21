"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
  delay?: number
}

export function Section({ children, className, title, subtitle, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("py-8", className)}
    >
      {(title || subtitle) && (
        <div className="mb-6 space-y-2">
          {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
          {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </motion.section>
  )
}
