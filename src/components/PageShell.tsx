"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] bg-[url('/grid.svg')]" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
