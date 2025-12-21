"use client"

import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Check, Minus } from "@phosphor-icons/react"

export default function ComparisonPage() {
  const comparisonData = [
    {
      criteria: "Phạm vi",
      bigTech: "Toàn cầu (Global)",
      superApps: "Trong nước & Khu vực (Local/Regional)",
      icon: "globe"
    },
    {
      criteria: "Mức độ độc quyền",
      bigTech: "Rất cao, bền vững",
      superApps: "Trung bình, chưa tuyệt đối",
      icon: "shield"
    },
    {
      criteria: "Quyền lực dữ liệu",
      bigTech: "Toàn cầu",
      superApps: "Nội địa (Hành vi tiêu dùng local)",
      icon: "database"
    },
    {
      criteria: "Lợi nhuận",
      bigTech: "Siêu lợi nhuận lâu dài",
      superApps: "Chưa ổn định, đốt tiền lấy thị phần",
      icon: "dollar"
    },
    {
      criteria: "Khả năng chi phối",
      bigTech: "Rất mạnh (Winner takes most)",
      superApps: "Có nhưng hạn chế, cạnh tranh cao",
      icon: "zap"
    },
    {
      criteria: "Can thiệp Nhà nước",
      bigTech: "Bị điều tra chống độc quyền (Antitrust)",
      superApps: "Quản lý chặt từ đầu (Luật ANM, Dữ liệu)",
      icon: "gavel"
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
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-primary text-sm font-semibold mb-4">
            ⚖️ Đối chiếu & Phân tích
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-6xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            So sánh toàn diện
          </span>
          <br />
          <span className="text-foreground">Big Tech vs Super-apps</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed px-4"
        >
          Sự khác biệt về <span className="text-purple-600 font-semibold">quy mô</span>, <span className="text-pink-600 font-semibold">quyền lực</span> và <span className="text-red-600 font-semibold">thách thức</span> giữa hai mô hình.
        </motion.p>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bảng so sánh chi tiết</h2>
          <p className="text-lg text-muted-foreground">Phân tích từng khía cạnh của hai mô hình</p>
        </motion.div>
        <div className="overflow-x-auto rounded-2xl border-2 shadow-xl -mx-4 md:mx-0">
          <table className="w-full text-left min-w-[600px]">
            <thead className="bg-gradient-to-r from-primary/10 to-purple-500/10">
              <tr>
                <th className="px-3 md:px-6 py-3 md:py-5 font-bold text-xs md:text-base">Tiêu chí</th>
                <th className="px-3 md:px-6 py-3 md:py-5 font-bold text-xs md:text-base">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-600" />
                    <span className="hidden sm:inline">Big Tech Mỹ</span>
                    <span className="sm:hidden">Big Tech</span>
                  </div>
                </th>
                <th className="px-3 md:px-6 py-3 md:py-5 font-bold text-xs md:text-base">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-600" />
                    <span className="hidden sm:inline">Super-apps VN</span>
                    <span className="sm:hidden">Super-apps</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {comparisonData.map((row, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="hover:bg-muted/50 transition-all group"
                >
                  <td className="px-3 md:px-6 py-3 md:py-5 font-semibold text-xs md:text-base group-hover:text-primary transition-colors">{row.criteria}</td>
                  <td className="px-3 md:px-6 py-3 md:py-5 text-muted-foreground text-xs md:text-base">{row.bigTech}</td>
                  <td className="px-3 md:px-6 py-3 md:py-5 text-muted-foreground text-xs md:text-base">{row.superApps}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section delay={0.6} title="Phân tích chi tiết" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/10">
          <CardHeader>
            <CardTitle className="text-blue-600">Big Tech Mỹ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2">
              <Check size={20} weight="bold" className="text-blue-600 mt-0.5" />
              <p>Mô hình "Winner takes most" - Người thắng lấy gần hết.</p>
            </div>
            <div className="flex items-start gap-2">
              <Check size={20} weight="bold" className="text-blue-600 mt-0.5" />
              <p>Sở hữu hạ tầng đám mây và hệ điều hành (Gốc rễ).</p>
            </div>
            <div className="flex items-start gap-2">
              <Check size={20} weight="bold" className="text-blue-600 mt-0.5" />
              <p>Đối mặt kiện tụng chống độc quyền mạnh mẽ tại Mỹ & EU.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-900/10">
          <CardHeader>
            <CardTitle className="text-green-600">Super-apps Việt Nam</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2">
              <Check size={20} weight="bold" className="text-green-600 mt-0.5" />
              <p>Cạnh tranh khốc liệt giữa nhiều "kỳ phùng địch thủ" (Grab vs ShopeeFood vs Be).</p>
            </div>
            <div className="flex items-start gap-2">
              <Minus size={20} weight="bold" className="text-green-600 mt-0.5" />
              <p>Phụ thuộc vào hạ tầng của Big Tech (iOS/Android).</p>
            </div>
            <div className="flex items-start gap-2">
              <Check size={20} weight="bold" className="text-green-600 mt-0.5" />
              <p>Mạnh về tùy biến theo thói quen người dùng nội địa (Localization).</p>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
