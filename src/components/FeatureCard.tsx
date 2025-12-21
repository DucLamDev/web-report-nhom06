"use client"

import { motion } from "framer-motion"
import * as React from "react"

interface FeatureCardProps {
  icon: React.ElementType
  title: string
  description: string
  color?: string
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, color = "blue", delay = 0 }: FeatureCardProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
    orange: "from-orange-500 to-orange-600",
    pink: "from-pink-500 to-pink-600",
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative flex gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
        <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {React.createElement(Icon as React.ElementType, { size: 24, weight: "duotone" })}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
