"use client"

import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SimplePieChart } from "@/components/Charts"
import { motion } from "framer-motion"
import {
  ArrowsClockwise,
  Database,
  DeviceMobile,
  LockKey,
  ShareNetwork,
  TrendUp,
  PlayCircle,
  ChartLine,
} from "@phosphor-icons/react"
import { FeatureCard } from "@/components/FeatureCard"
import Image from "next/image"

export default function SuperAppsPage() {
  const foodDeliveryData = [
    { name: 'GrabFood', value: 48 },
    { name: 'ShopeeFood', value: 47 },
    { name: 'Others', value: 5 },
  ];

  const apps = [
    {
      name: "Zalo",
      description: "Nhắn tin – Thanh toán – Hành chính công – Mini app",
      users: "78 Triệu người dùng",
      logo: "/logos/Icon_of_Zalo.svg.png",
      gradient: "from-blue-500 to-blue-600",
      services: ["Nhắn tin", "ZaloPay", "Mini App", "Hành chính công"]
    },
    {
      name: "Grab",
      description: "Gọi xe – Giao đồ ăn – Ví điện tử – Tài chính",
      users: "Siêu ứng dụng hàng đầu",
      logo: "/logos/grab-logo-png_seeklogo-622162.png",
      gradient: "from-green-500 to-green-600",
      services: ["GrabCar", "GrabFood", "GrabPay", "GrabFinance"]
    },
    {
      name: "MoMo",
      description: "Thanh toán – Vay – Bảo hiểm – Tiêu dùng",
      users: "Ví điện tử phổ biến nhất",
      logo: "/logos/Logo-MoMo-Circle.webp",
      gradient: "from-pink-500 to-pink-600",
      services: ["Thanh toán", "MoMo Vay", "Bảo hiểm", "Tiêu dùng"]
    }
  ]

  const mechanisms = [
    {
      title: "Hiệu ứng mạng lưới",
      description: "Người dùng đông → khó rời bỏ (VD: Ai cũng dùng Zalo nên tôi phải dùng).",
      icon: ShareNetwork
    },
    {
      title: "Độc quyền dữ liệu nội địa",
      description: "Nắm rõ hành vi tiêu dùng, thói quen của người Việt Nam.",
      icon: Database
    },
    {
      title: "Hệ sinh thái khép kín",
      description: "Ví – Dịch vụ – Đối tác. Giữ chân người dùng trong app.",
      icon: LockKey
    },
    {
      title: "Rào cản chuyển đổi",
      description: "Tâm lý 'ngại đổi app', quen thuộc với giao diện và ví liên kết.",
      icon: ArrowsClockwise
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
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 text-primary text-sm font-semibold mb-4">
            📱 Phân tích Super-apps
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Siêu ứng dụng
          </span>
          <br />
          <span className="text-foreground">Việt Nam</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed px-4"
        >
          <span className="text-green-600 font-semibold">Zalo, Grab, MoMo</span> - Sự trỗi dậy của các nền tảng đa dịch vụ trong nước.
        </motion.p>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Super-app là gì?</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Là ứng dụng tích hợp <span className="text-primary font-semibold">nhiều dịch vụ</span> trong một nền tảng duy nhất (One-stop shop).
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden h-full border-2 hover:border-primary/50 transition-all duration-300 group">
                <div className={`h-2 bg-gradient-to-r ${app.gradient}`} />
                <CardHeader className="relative pb-4">
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} p-3 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Image src={app.logo} alt={app.name} width={48} height={48} className="w-full h-full" />
                    </div>
                  </motion.div>
                  <CardTitle className="text-2xl font-bold mb-2">{app.name}</CardTitle>
                  <CardDescription className="font-semibold text-base flex items-center gap-2">
                    <ChartLine size={16} weight="duotone" className="text-primary" />
                    {app.users}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.services.map((service, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${app.gradient} bg-opacity-10 text-foreground font-medium border border-current/10`}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section delay={0.4} title="Có tạo ra độc quyền không?" subtitle="Có xu hướng độc quyền, nhưng ở mức độ thấp hơn Big Tech Mỹ.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Thị phần Giao đồ ăn (Ước tính)</CardTitle>
              <CardDescription>Sự thống trị của GrabFood và ShopeeFood (~96%).</CardDescription>
            </CardHeader>
            <CardContent>
              <SimplePieChart data={foodDeliveryData} title="" />
            </CardContent>
          </Card>
          <div className="space-y-4">
             <Card>
              <CardHeader>
                <CardTitle>Tại sao chỉ là độc quyền cục bộ?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Thị trường nhỏ:</strong> Quy mô Việt Nam nhỏ hơn nhiều so với toàn cầu.</li>
                  <li><strong>Kiểm soát nhà nước:</strong> Luật an ninh mạng, luật dữ liệu, quy định thanh toán chặt chẽ.</li>
                  <li><strong>Phụ thuộc hạ tầng:</strong> Vẫn phải "sống nhờ" trên iOS (Apple) và Android (Google).</li>
                </ul>
              </CardContent>
             </Card>
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Cơ chế độc quyền</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">Các yếu tố tạo nên vị thế thống trị tại thị trường Việt Nam</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mechanisms.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={index % 2 === 0 ? "green" : "blue"}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Comparison Diagram */}
      <Section className="py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">So sánh với Big Tech toàn cầu</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">Sự khác biệt về quy mô và tầm ảnh hưởng</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Big Tech Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      Big Tech (Toàn cầu)
                    </h3>
                    <p className="text-sm text-muted-foreground">Google, Meta, Amazon</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Phạm vi", value: "Toàn cầu (>2 tỷ người)" },
                      { label: "Kiểm soát", value: "Nền tảng + Hệ điều hành" },
                      { label: "Dữ liệu", value: "Đa quốc gia, đa ngôn ngữ" },
                      { label: "Tác động", value: "Chính trị, kinh tế, xã hội" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                      >
                        <div className="text-xs font-semibold text-muted-foreground mb-1">{item.label}</div>
                        <div className="text-sm font-medium">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Super-apps Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                      Super-apps (VN)
                    </h3>
                    <p className="text-sm text-muted-foreground">Zalo, Grab, MoMo</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Phạm vi", value: "Địa phương (~100 triệu)" },
                      { label: "Kiểm soát", value: "Ứng dụng (iOS/Android)" },
                      { label: "Dữ liệu", value: "Nội địa, văn hóa địa phương" },
                      { label: "Tác động", value: "Thị trường trong nước" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20"
                      >
                        <div className="text-xs font-semibold text-muted-foreground mb-1">{item.label}</div>
                        <div className="text-sm font-medium">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Connecting Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 border-t border-border text-center"
              >
                <p className="text-sm text-muted-foreground italic">
                  💡 <strong>Kết luận:</strong> Super-apps VN là độc quyền "cục bộ", còn Big Tech là độc quyền "toàn cầu"
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </Section>
    </div>
  )
}
