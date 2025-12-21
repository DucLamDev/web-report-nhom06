"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowsLeftRight,
  BookOpenText,
  ChatCenteredDots,
  ClipboardText,
  DeviceMobile,
  GlobeHemisphereWest,
  House,
  List,
  X,
} from "@phosphor-icons/react"

const navItems = [
  { name: "Tổng quan", href: "/", icon: House },
  { name: "Big Tech Mỹ", href: "/big-tech", icon: GlobeHemisphereWest },
  { name: "Super-apps VN", href: "/super-apps", icon: DeviceMobile },
  { name: "So sánh", href: "/comparison", icon: ArrowsLeftRight },
  { name: "Góc nhìn Mác-Lênin", href: "/marxist-perspective", icon: BookOpenText },
  { name: "Chatbot AI", href: "/chatbot", icon: ChatCenteredDots },
  { name: "Khảo sát", href: "/survey", icon: ClipboardText },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-md md:hidden"
      >
        {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
      </button>

      <motion.div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-border">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech Monopoly
            </h1>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon size={20} weight="duotone" className="mr-3" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-border">
            <p className="text-xs text-center text-muted-foreground">
              © 2025 Tech Report
            </p>
          </div>
        </div>
      </motion.div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
