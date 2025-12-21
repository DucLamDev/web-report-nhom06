"use client"

import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SimplePieChart, SimpleBarChart } from "@/components/Charts"
import { motion } from "framer-motion"
import {
  CirclesThree,
  Cloud,
  Lightning,
  LockKey,
  MagnifyingGlass,
  ShareNetwork,
  ShoppingCartSimple,
  Stack,
  TrendUp,
} from "@phosphor-icons/react"
import { FeatureCard } from "@/components/FeatureCard"
import { Timeline } from "@/components/Timeline"
import { ValueChain } from "@/components/ValueChain"

export default function BigTechPage() {
  const adShareData = [
    { name: 'Google', value: 39 },
    { name: 'Meta', value: 18 },
    { name: 'Others', value: 43 },
  ];

  const searchShareData = [
    { name: 'Google', value: 86 },
    { name: 'Others', value: 14 },
  ];

  const monopolyTypes = [
    {
      title: "Độc quyền dữ liệu",
      description: "Nắm giữ khối lượng dữ liệu người dùng khổng lồ để tối ưu hóa thuật toán và quảng cáo.",
      icon: Stack,
    },
    {
      title: "Hiệu ứng mạng lưới",
      description: "Càng nhiều người dùng tham gia, nền tảng càng trở nên khó thay thế.",
      icon: ShareNetwork,
    },
    {
      title: "Độc quyền hệ sinh thái",
      description: "Khóa chặt người dùng và doanh nghiệp trong một vòng tròn khép kín.",
      icon: ShoppingCartSimple,
    },
    {
      title: "Kiểm soát tìm kiếm",
      description: "Google kiểm soát phần lớn luồng thông tin và truy cập web toàn cầu.",
      icon: MagnifyingGlass,
    },
  ]

  return (
    <div className="space-y-16">
      <Section className="space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-primary text-sm font-semibold mb-4">
            🌐 Phân tích Big Tech
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Mô hình độc quyền
          </span>
          <br />
          <span className="text-foreground">Big Tech Mỹ</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed px-4"
        >
          <span className="text-blue-600 font-semibold">Google, Meta, Apple, Amazon, Microsoft</span> - Những gã khổng lồ công nghệ thống trị nền tảng số trong kỷ nguyên mới.
        </motion.p>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Bản chất độc quyền</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">Không phải độc quyền sản phẩm, mà là <span className="text-primary font-semibold">độc quyền nền tảng</span> (Platform Monopoly).</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {monopolyTypes.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={index % 2 === 0 ? "blue" : "purple"}
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Thống kê thị phần</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">Sức mạnh áp đảo của Big Tech qua các con số</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="hover-lift border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <TrendUp size={20} weight="duotone" className="text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-blue-600">2023</span>
                </div>
                <CardTitle className="text-xl">Thị phần Quảng cáo Số Toàn cầu</CardTitle>
                <CardDescription className="text-base">Google và Meta chiếm hơn một nửa thị trường.</CardDescription>
              </CardHeader>
              <CardContent>
                <SimplePieChart data={adShareData} title="" />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="hover-lift border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MagnifyingGlass size={20} weight="duotone" className="text-purple-600" />
                  </div>
                  <span className="text-sm font-semibold text-purple-600">2025</span>
                </div>
                <CardTitle className="text-xl">Thị phần Tìm kiếm Trực tuyến</CardTitle>
                <CardDescription className="text-base">Sự thống trị tuyệt đối của Google Search.</CardDescription>
              </CardHeader>
              <CardContent>
                <SimplePieChart data={searchShareData} title="" />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Cách thức duy trì độc quyền</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">Chiến lược và phương thức củng cố vị thế thống trị</p>
        </motion.div>
        <div className="space-y-6">
          <ValueChain
            title="Kiểm soát chuỗi giá trị"
            description="Từ hạ tầng → nền tảng → dịch vụ → quảng cáo → thanh toán. Big Tech khóa chặt toàn bộ đường đi của giá trị để tạo ra lợi nhuận siêu ngạch lâu dài."
            steps={[
              {
                title: "Hạ tầng",
                subtitle: "Cloud, chip, mạng, kho dữ liệu",
                icon: Cloud,
                color: "blue",
              },
              {
                title: "Nền tảng",
                subtitle: "OS, App Store, Search, Social",
                icon: Stack,
                color: "purple",
              },
              {
                title: "Dịch vụ",
                subtitle: "AI, productivity, marketplace",
                icon: Lightning,
                color: "cyan",
              },
              {
                title: "Quảng cáo",
                subtitle: "Targeting, auction, analytics",
                icon: TrendUp,
                color: "pink",
              },
              {
                title: "Thanh toán",
                subtitle: "Wallet, billing, subscriptions",
                icon: LockKey,
                color: "emerald",
              },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Thâu tóm đối thủ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Meta:</strong> Mua lại Instagram, WhatsApp.</li>
                  <li><strong>Google:</strong> Mua lại YouTube, Android.</li>
                  <li>Loại bỏ cạnh tranh từ khi còn "trứng nước".</li>
                </ul>
              </CardContent>
             </Card>
             <Card>
              <CardHeader>
                <CardTitle>Hệ quả</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><span className="text-green-600 font-semibold">Tích cực:</span> Đổi mới nhanh, dịch vụ tiện lợi.</li>
                  <li><span className="text-red-600 font-semibold">Tiêu cực:</span> Chèn ép doanh nghiệp nhỏ, kiểm soát thông tin, bất bình đẳng.</li>
                </ul>
              </CardContent>
             </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
