"use client"

import { motion } from "framer-motion"
import * as React from "react"

export type ValueChainStep = {
  title: string
  subtitle: string
  icon: React.ElementType
  color: "blue" | "purple" | "cyan" | "pink" | "emerald"
}

const colorMap = {
  blue: {
    chip: "from-blue-500 to-blue-600",
    glow: "from-blue-500/25 via-blue-500/10 to-transparent",
    ring: "ring-blue-500/25",
  },
  purple: {
    chip: "from-purple-500 to-purple-600",
    glow: "from-purple-500/25 via-purple-500/10 to-transparent",
    ring: "ring-purple-500/25",
  },
  cyan: {
    chip: "from-cyan-500 to-cyan-600",
    glow: "from-cyan-500/25 via-cyan-500/10 to-transparent",
    ring: "ring-cyan-500/25",
  },
  pink: {
    chip: "from-pink-500 to-pink-600",
    glow: "from-pink-500/25 via-pink-500/10 to-transparent",
    ring: "ring-pink-500/25",
  },
  emerald: {
    chip: "from-emerald-500 to-emerald-600",
    glow: "from-emerald-500/25 via-emerald-500/10 to-transparent",
    ring: "ring-emerald-500/25",
  },
}

export function ValueChain({
  title,
  description,
  steps,
}: {
  title: string
  description: string
  steps: ValueChainStep[]
}) {
  return (
    <div className="relative overflow-hidden rounded-xl md:rounded-2xl border-2 bg-gradient-to-br from-card to-card/60 p-4 md:p-6 lg:p-8 shadow-xl">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-primary/15 via-purple-500/10 to-transparent blur-3xl" />

      <div className="relative">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h3>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="relative">
            <div className="absolute left-3 right-3 top-6 md:top-8 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent hidden sm:block" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-3 right-3 top-6 md:top-8 h-px origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden sm:block"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
              {steps.map((s, idx) => {
                const palette = colorMap[s.color]
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.5 }}
                    className="relative group"
                  >
                    <div className={`pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br ${palette.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                    <div className={`relative h-full rounded-xl md:rounded-2xl border bg-card/80 backdrop-blur-sm p-3 md:p-4 ring-1 ${palette.ring} hover:border-primary/40 transition-all hover-lift`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`inline-flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br ${palette.chip} text-white shadow-lg ring-1 ring-white/20`}>
                          {React.createElement(s.icon as React.ElementType, { size: 18, weight: "duotone", className: "md:w-[22px] md:h-[22px]" })}
                        </div>
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-foreground/20 group-hover:bg-primary transition-colors" />
                      </div>

                      <div className="mt-2 md:mt-3 space-y-0.5 md:space-y-1">
                        <div className="text-xs md:text-sm font-semibold text-foreground">{s.title}</div>
                        <div className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">{s.subtitle}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="mt-3 md:mt-4 text-[10px] md:text-xs text-muted-foreground hidden sm:block">
            Tip: Di chuột vào từng bước để xem hiệu ứng nhấn mạnh (phù hợp khi thuyết trình).
          </div>
        </div>
      </div>
    </div>
  )
}
