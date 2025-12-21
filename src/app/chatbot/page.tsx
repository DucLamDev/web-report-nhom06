"use client"

import { useState, useRef, useEffect } from "react"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" // Need to create this or use standard HTML button
import { PaperPlaneRight, Robot, User, WarningCircle } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "bot"
  content: string
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "Xin chào! Tôi là trợ lý AI chuyên về báo cáo Độc quyền Tech. Bạn muốn tìm hiểu gì về Big Tech Mỹ hay Super-apps Việt Nam?"
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response")
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: data.response
      }

      setMessages(prev => [...prev, botMessage])
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Có lỗi xảy ra. Vui lòng thử lại sau.")
      // Add a visual error message from bot
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: "Xin lỗi, tôi đang gặp sự cố kết nối. Vui lòng kiểm tra lại cấu hình API Key hoặc thử lại sau."
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] flex flex-col">
      <Section className="flex-none mb-3 md:mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2 md:space-y-3"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 mb-2">
            <Robot className="text-cyan-600" size={20} weight="duotone" />
            <span className="text-xs md:text-sm font-semibold text-primary">🤖 Powered by Gemini AI</span>
          </div>
          <h1 className="text-2xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Trợ lý AI thông minh
            </span>
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Hỏi đáp về nội dung báo cáo với <span className="text-primary font-semibold">công nghệ Google Gemini</span>
          </p>
        </motion.div>
      </Section>

      <Card className="flex-1 flex flex-col overflow-hidden border-2 shadow-2xl rounded-xl md:rounded-2xl bg-gradient-to-br from-card to-card/50">
        <CardContent className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex w-full",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] md:max-w-[80%] rounded-lg p-2 md:p-3 flex gap-2 md:gap-3",
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground ml-auto" 
                    : "bg-muted text-muted-foreground"
                )}
              >
                <div className="flex-shrink-0 mt-0.5 md:mt-1">
                  {msg.role === "user" ? <User size={14} weight="duotone" className="md:w-4 md:h-4" /> : <Robot size={14} weight="duotone" className="md:w-4 md:h-4" />}
                </div>
                <div className="whitespace-pre-wrap text-xs md:text-base leading-relaxed">{msg.content}</div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="bg-muted text-muted-foreground rounded-lg p-2 md:p-3 flex gap-2 items-center">
                <Robot size={14} weight="duotone" className="md:w-4 md:h-4" />
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-3 md:p-4 border-t bg-card">
          {error && (
             <div className="mb-2 text-xs md:text-sm text-red-500 flex items-center gap-2">
               <WarningCircle size={12} weight="bold" className="md:w-3.5 md:h-3.5" />
               <span className="line-clamp-2">{error}</span>
             </div>
          )}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Đặt câu hỏi..."
              className="flex-1 px-3 md:px-4 py-2 text-sm md:text-base rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              <PaperPlaneRight size={18} weight="bold" className="md:w-5 md:h-5" />
            </button>
          </form>
        </div>
      </Card>
    </div>
  )
}
