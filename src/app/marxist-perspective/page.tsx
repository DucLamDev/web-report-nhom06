"use client"

import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpenText, Cpu, Database, ShareNetwork, TrendUp } from "@phosphor-icons/react"
import { FeatureCard } from "@/components/FeatureCard"
import { Timeline } from "@/components/Timeline"

export default function MarxistPerspectivePage() {
  const profitSources = [
    {
      title: "Dữ liệu (Data)",
      description: "Tài nguyên mới của kỷ nguyên số, được khai thác để tạo ra giá trị thặng dư.",
      icon: Database
    },
    {
      title: "Thuật toán (Algorithms)",
      description: "Phương tiện sản xuất phi vật thể, tối ưu hóa quy trình bóc lột và kiểm soát.",
      icon: Cpu
    },
    {
      title: "Hệ sinh thái số",
      description: "Môi trường độc quyền bao quanh người dùng, tối đa hóa lợi nhuận.",
      icon: ShareNetwork
    }
  ]

  const timelineItems = [
    {
      title: "Từ Độc quyền Công nghiệp",
      description: "Thế kỷ 19-20: Độc quyền dựa trên nhà máy, thiết bị sản xuất.",
      year: "1900s"
    },
    {
      title: "Sang Độc quyền Nền tảng",
      description: "Thế kỷ 21: Độc quyền chuyển sang dữ liệu, thuật toán, hệ sinh thái số.",
      year: "2000s"
    },
    {
      title: "Bản chất không đổi",
      description: "Dù hình thái thay đổi, bản chất vẫn là tích lũy tư bản và lợi nhuận siêu ngạch.",
      year: "2025"
    }
  ]

  return (
    <div className="space-y-16">
      <Section className="space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-primary text-sm font-semibold mb-4">
            📖 Lý luận Kinh tế
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Góc nhìn Mác-Lênin
          </span>
          <br />
          <span className="text-foreground">về Độc quyền Số</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed px-4"
        >
          Phân tích <span className="text-red-600 font-semibold">bản chất</span> độc quyền công nghệ dưới lăng kính <span className="text-orange-600 font-semibold">lý luận kinh điển</span>.
        </motion.p>
      </Section>

      <Section delay={0.2} title="Chủ nghĩa tư bản độc quyền hiện đại">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <BookOpenText size={24} weight="duotone" />
                Big Tech Mỹ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium mb-2">Biểu hiện cao nhất của độc quyền tư bản</p>
              <p className="text-muted-foreground">
                Tập trung tư bản cực lớn, kiểm soát thị trường toàn cầu thông qua nền tảng công nghệ.
                Đây là hình thức độc quyền xuyên quốc gia, vượt ra khỏi biên giới lãnh thổ.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                <TrendUp size={24} weight="duotone" />
                Super-apps Việt Nam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium mb-2">Độc quyền trong giai đoạn phát triển</p>
              <p className="text-muted-foreground">
                Là dạng độc quyền nền tảng đang hình thành, cạnh tranh để tích tụ tư bản và thị phần.
                Chưa đạt đến mức độ chi phối hoàn toàn như Big Tech.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Nguồn gốc Lợi nhuận siêu ngạch</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Không còn chỉ đến từ <span className="text-muted-foreground font-semibold">tư liệu sản xuất vật chất</span>, mà chuyển dịch sang:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profitSources.map((source, index) => (
            <FeatureCard
              key={index}
              icon={source.icon}
              title={source.title}
              description={source.description}
              color="red"
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Sự chuyển dịch lịch sử</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">Từ độc quyền công nghiệp đến độc quyền nền tảng</p>
        </motion.div>
        <Timeline items={timelineItems} />
      </Section>

      <Section delay={0.6}>
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-8 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Kết luận</h3>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-200">
            "Sự phát triển của độc quyền công nghệ xác nhận tính đúng đắn của lý luận Mác - Lênin về xu hướng tập trung hóa tư bản. 
            Tuy nhiên, hình thái biểu hiện đã thay đổi từ 'công xưởng' sang 'nền tảng' (platform), đặt ra thách thức mới 
            cho nhà nước trong việc quản lý và điều tiết để đảm bảo công bằng xã hội."
          </p>
        </div>
      </Section>
    </div>
  )
}
