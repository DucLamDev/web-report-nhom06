"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { AnimatedCounter } from "./AnimatedCounter"

interface StatsCardProps {
  icon: React.ElementType
  value: number
  label: string
  suffix?: string
  prefix?: string
  color?: string
  delay?: number
}

export function StatsCard({ 
  icon: Icon, 
  value, 
  label, 
  suffix = "", 
  prefix = "",
  color = "blue",
  delay = 0
}: StatsCardProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
    orange: "from-orange-500 to-orange-600",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-br from-card to-muted rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border group hover-lift"
    >
      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {React.createElement(Icon as React.ElementType, { size: 28, weight: "duotone" })}
        </div>
        <div className="space-y-1">
          <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
          <p className="text-sm md:text-base text-muted-foreground font-medium">{label}</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -mr-16 -mt-16" />
    </motion.div>
  )
}
