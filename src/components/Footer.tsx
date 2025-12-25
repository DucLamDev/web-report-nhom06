"use client"

import { motion } from "framer-motion"
import { GithubLogo, EnvelopeSimple, GraduationCap, Users } from "@phosphor-icons/react"
import Link from "next/link"

export function Footer() {
  const teamMembers = [
    { name: "Nguyễn Văn A", role: "Nghiên cứu & Phân tích", id: "SV001" },
    { name: "Trần Thị B", role: "Thiết kế UI/UX", id: "SV002" },
    { name: "Lê Văn C", role: "Phát triển Web", id: "SV003" },
    { name: "Phạm Thị D", role: "Nội dung & Biên tập", id: "SV004" },
  ]

  return (
    <footer className="relative mt-20 border-t border-border bg-gradient-to-b from-background to-muted/20">

    </footer>
  )
}
