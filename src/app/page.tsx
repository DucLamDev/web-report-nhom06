"use client"

import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowsLeftRight,
  BookOpenText,
  CurrencyDollar,
  GlobeHemisphereWest,
  Pulse,
  Robot,
  TrendUp,
  UsersThree,
  DeviceMobile,
} from "@phosphor-icons/react"
import Link from "next/link"
import { StatsCard } from "@/components/StatsCard"

export default function Home() {
  const cards = [
    {
      title: "Mô hình Big Tech Mỹ",
      description: "Khám phá bản chất độc quyền nền tảng của các gã khổng lồ công nghệ Mỹ.",
      href: "/big-tech",
      icon: GlobeHemisphereWest,
      color: "text-blue-500",
    },
    {
      title: "Super-apps Việt Nam",
      description: "Tìm hiểu về mô hình siêu ứng dụng và cơ chế độc quyền tại Việt Nam.",
      href: "/super-apps",
      icon: DeviceMobile,
      color: "text-green-500",
    },
    {
      title: "So sánh & Đối chiếu",
      description: "Phân tích sự khác biệt giữa Big Tech Mỹ và Super-apps Việt Nam.",
      href: "/comparison",
      icon: ArrowsLeftRight,
      color: "text-purple-500",
    },
    {
      title: "Góc nhìn Mác-Lênin",
      description: "Liên hệ lý luận kinh tế chính trị với thực tiễn độc quyền công nghệ.",
      href: "/marxist-perspective",
      icon: BookOpenText,
      color: "text-red-500",
    },
  ]

  return (
    <div className="space-y-16">
      <Section className="text-center space-y-6 pt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-primary text-sm font-semibold mb-4">
            📊 Nghiên cứu Kinh tế Số 2025
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Độc quyền Big Tech
          </span>
          <br />
          <span className="text-foreground">& Super-apps</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed px-4"
        >
          Một cái nhìn sâu sắc về <span className="text-primary font-semibold">mô hình độc quyền</span> trong kỷ nguyên số, từ <span className="text-blue-600 font-semibold">thung lũng Silicon</span> đến <span className="text-green-600 font-semibold">thị trường Việt Nam</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link href="/big-tech">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              Khám phá ngay
            </button>
          </Link>
          <Link href="/chatbot">
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold text-lg hover:scale-105 transition-transform border-2 border-border">
              Trò chuyện với AI
            </button>
          </Link>
        </motion.div>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Thống kê nổi bật</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">Những con số ấn tượng về thị trường công nghệ</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={TrendUp}
            value={86}
            suffix="%"
            label="Thị phần tìm kiếm của Google"
            color="blue"
            delay={0}
          />
          <StatsCard
            icon={UsersThree}
            value={78}
            label="Triệu người dùng Zalo (VN)"
            color="green"
            delay={0.1}
          />
          <StatsCard
            icon={CurrencyDollar}
            value={39}
            suffix="%"
            label="Thị phần quảng cáo số của Google"
            color="purple"
            delay={0.2}
          />
          <StatsCard
            icon={Pulse}
            value={96}
            suffix="%"
            label="Thị phần giao đồ ăn (Grab+Shopee)"
            color="orange"
            delay={0.3}
          />
        </div>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Khám phá nội dung</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">Phân tích chuyên sâu từng khía cạnh của độc quyền công nghệ</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={card.href}>
                <Card className="h-full hover:border-primary/50 transition-all duration-300 cursor-pointer group hover-lift relative overflow-hidden bg-gradient-to-br from-card to-card/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl" />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.color === 'text-blue-500' ? 'from-blue-500 to-blue-600' : card.color === 'text-green-500' ? 'from-green-500 to-green-600' : card.color === 'text-purple-500' ? 'from-purple-500 to-purple-600' : 'from-red-500 to-red-600'} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <card.icon size={32} weight="duotone" />
                      </div>
                      <ArrowRight size={24} weight="bold" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white border-none shadow-2xl">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl" />
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Robot size={24} weight="duotone" />
                </div>
                <span className="text-sm font-semibold px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">🤖 Powered by Gemini AI</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold">Trợ lý ảo thông minh</CardTitle>
              <CardDescription className="text-slate-200 text-sm md:text-base lg:text-lg mt-2">
                Bạn có câu hỏi về nội dung báo cáo? Hãy trò chuyện với Chatbot AI của chúng tôi. Được tối ưu hóa để trả lời mọi thắc mắc về độc quyền công nghệ.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-wrap gap-4">
              <Link href="/chatbot">
                <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Trò chuyện ngay
                </button>
              </Link>
              <Link href="/survey">
                <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
                  Gửi phản hồi
                </button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </Section>
    </div>
  )
}
