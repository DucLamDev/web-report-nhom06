"use client"

import { useState } from "react"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // Need to create
import { Textarea } from "@/components/ui/textarea" // Need to create
import { Label } from "@/components/ui/label" // Need to create
import { motion } from "framer-motion"
import { CheckCircle, ClipboardText, PaperPlaneRight } from "@phosphor-icons/react"

export default function SurveyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    opinion: "",
    suggestion: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    console.log("Form submitted:", formData)
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="space-y-8">
      <Section className="space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-2 md:gap-3">
          <ClipboardText size={28} weight="duotone" className="text-yellow-600 md:w-[34px] md:h-[34px]" />
          Khảo sát & Ý kiến
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
          Chúng tôi muốn lắng nghe quan điểm của bạn về vấn đề độc quyền công nghệ.
        </p>
      </Section>

      <Section delay={0.2}>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Phiếu thu thập ý kiến</CardTitle>
            <CardDescription>
              Hãy chia sẻ suy nghĩ của bạn để chúng tôi hoàn thiện báo cáo này tốt hơn.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 space-y-4 text-center"
              >
                <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-400">
                  <CheckCircle size={48} weight="duotone" />
                </div>
                <h3 className="text-2xl font-bold">Cảm ơn bạn!</h3>
                <p className="text-muted-foreground">
                  Ý kiến của bạn đã được ghi nhận. Chúng tôi trân trọng sự đóng góp của bạn.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Gửi ý kiến khác
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Nhập tên của bạn" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Tùy chọn)</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="example@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="opinion">Bạn nghĩ sao về độc quyền Big Tech?</Label>
                  <Textarea 
                    id="opinion" 
                    name="opinion" 
                    placeholder="Chia sẻ quan điểm của bạn..." 
                    className="min-h-[100px]"
                    value={formData.opinion}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="suggestion">Đề xuất thêm chức năng cho website?</Label>
                  <Textarea 
                    id="suggestion" 
                    name="suggestion" 
                    placeholder="Ví dụ: Thêm biểu đồ tương tác, thêm mục tin tức..." 
                    className="min-h-[80px]"
                    value={formData.suggestion}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <PaperPlaneRight size={18} weight="bold" className="mr-2" />
                  Gửi ý kiến
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
