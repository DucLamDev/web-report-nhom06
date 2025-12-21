"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, ChatCenteredDots, ClipboardText } from "@phosphor-icons/react"
import Link from "next/link"

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let raf = 0

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setShowScrollTop(window.scrollY > 300)
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} weight="bold" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href="/chatbot"
          className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Open Chatbot"
        >
          <ChatCenteredDots size={24} weight="duotone" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href="/survey"
          className="flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Give Feedback"
        >
          <ClipboardText size={24} weight="duotone" />
        </Link>
      </motion.div>
    </div>
  )
}
