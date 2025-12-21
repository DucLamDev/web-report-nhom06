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
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={24} weight="duotone" className="text-primary md:w-7 md:h-7" />
              <h3 className="text-base md:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Monopoly Report
              </h3>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Báo cáo chuyên sâu về hiện tượng độc quyền công nghệ toàn cầu và Việt Nam, 
              phân tích từ góc nhìn kinh tế chính trị Mác-Lênin.
            </p>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <GraduationCap size={14} weight="duotone" className="md:w-4 md:h-4" />
              <span>Đại học Công Nghệ Tp.HCM</span>
            </div>
          </motion.div>

          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Users size={20} weight="duotone" className="text-primary md:w-6 md:h-6" />
              <h3 className="text-base md:text-lg font-bold">Thành viên nhóm</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="group"
                >
                  <div className="text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">
                    {member.role} • {member.id}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-base md:text-lg font-bold">Liên hệ</h3>
            <div className="space-y-2 md:space-y-3">
              <a
                href="mailto:contact@techmonopoly.edu.vn"
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <EnvelopeSimple size={16} weight="duotone" className="md:w-[18px] md:h-[18px]" />
                </div>
                <span className="break-all">contact@techmonopoly.edu.vn</span>
              </a>
            </div>
            <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/20">
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                Dự án được thực hiện với mục đích học thuật, phục vụ nghiên cứu và giảng dạy tại HUTECH.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
              © 2025 Tech Monopoly Report. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="/" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <Link href="/chatbot" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Chatbot
              </Link>
              <Link href="/survey" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Khảo sát
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  )
}
