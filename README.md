# 📊 Tech Monopoly Report

Website trình bày báo cáo về **Mô hình độc quyền Big Tech Mỹ và Super-apps Việt Nam** với giao diện hiện đại, animation mượt mà và tích hợp AI Chatbot.

## ✨ Tính năng

- 🎨 **Giao diện hiện đại**: Thiết kế responsive với TailwindCSS, hỗ trợ dark mode
- 🎭 **Animation đẹp mắt**: Sử dụng Framer Motion cho các hiệu ứng chuyển động
- 📈 **Biểu đồ tương tác**: Visualizations với Recharts
- 🤖 **AI Chatbot**: Trợ lý AI sử dụng Google Gemini API
- 📝 **Khảo sát & Feedback**: Thu thập ý kiến người dùng
- 📱 **Sidebar navigation**: Di chuyển dễ dàng giữa các phần

## 📄 Nội dung báo cáo

1. **Tổng quan**: Giới thiệu chung về độc quyền công nghệ
2. **Big Tech Mỹ**: Phân tích mô hình độc quyền của Google, Meta, Apple, Amazon, Microsoft
3. **Super-apps Việt Nam**: Nghiên cứu Zalo, Grab, MoMo
4. **So sánh**: Đối chiếu hai mô hình
5. **Góc nhìn Mác-Lênin**: Phân tích theo lý luận kinh tế chính trị
6. **Chatbot AI**: Hỏi đáp thông minh về nội dung báo cáo
7. **Khảo sát**: Thu thập ý kiến phản hồi

## 🚀 Cài đặt

### Yêu cầu hệ thống
- Node.js 18.x trở lên
- npm hoặc yarn

### Các bước cài đặt

1. **Clone hoặc tải project**

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Cấu hình API Key cho Chatbot (Tùy chọn)**

Tạo file `.env.local` trong thư mục gốc với nội dung:
```env
GEMINI_API_KEY=your_api_key_here
```

**Lấy API Key miễn phí tại:** https://makersuite.google.com/app/apikey

4. **Chạy development server**
```bash
npm run dev
```

5. **Truy cập website**
Mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.x
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **AI**: Google Generative AI (Gemini)
- **UI Components**: Radix UI (Button, Label)

## 📁 Cấu trúc thư mục

```
src/
├── app/                      # Pages & Routes
│   ├── api/chat/            # API route cho chatbot
│   ├── big-tech/            # Trang Big Tech
│   ├── super-apps/          # Trang Super-apps
│   ├── comparison/          # Trang so sánh
│   ├── marxist-perspective/ # Trang góc nhìn Mác-Lênin
│   ├── chatbot/             # Trang chatbot
│   ├── survey/              # Trang khảo sát
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Trang chủ
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── ui/                  # UI primitives
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── Section.tsx          # Section wrapper
│   └── Charts.tsx           # Chart components
└── lib/
    └── utils.ts             # Utility functions
```

## 🎯 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run start` - Chạy production server
- `npm run lint` - Kiểm tra lỗi code

## 📝 Ghi chú

- **Chatbot AI** sẽ chỉ hoạt động khi bạn đã cấu hình `GEMINI_API_KEY` trong file `.env.local`
- Website được tối ưu cho cả desktop và mobile
- Sử dụng TailwindCSS v4 với cú pháp `@import` và `@theme`

## 🤝 Đóng góp

Mọi đóng góp và ý kiến đều được chào đón! Vui lòng sử dụng form Khảo sát trong website hoặc tạo issue/PR.

## 📄 License

MIT License - Tự do sử dụng cho mục đích học tập và nghiên cứu.

---

**Phát triển bởi:** Tech Report Team  
**Ngày tạo:** 2025  
**Công nghệ:** Next.js + TailwindCSS + Google AI
