import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize Gemini API
// Note: In a real deployment, use process.env.GEMINI_API_KEY
// For this demo, we'll check if the key exists.
const apiKey = process.env.GEMINI_API_KEY;

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const SYSTEM_PROMPT = `
Bạn là một trợ lý AI chuyên gia về chủ đề "Độc quyền Big Tech Mỹ và Super-apps Việt Nam".
Nhiệm vụ của bạn là trả lời các câu hỏi dựa trên nội dung báo cáo sau:

1. Big Tech Mỹ (Google, Meta, Apple, Amazon, Microsoft):
- Bản chất: Độc quyền nền tảng (Platform Monopoly), độc quyền dữ liệu, công nghệ, hiệu ứng mạng lưới.
- Cách thức: Kiểm soát chuỗi giá trị, mua lại đối thủ (Meta mua Instagram/WhatsApp), ép buộc người dùng vào hệ sinh thái.
- Hệ quả: Tích cực (đổi mới), Tiêu cực (chèn ép, kiểm soát thông tin).

2. Super-apps Việt Nam (Zalo, Grab, MoMo):
- Định nghĩa: Ứng dụng tích hợp nhiều dịch vụ (One-stop shop).
- Mức độ độc quyền: Thấp hơn Big Tech, chủ yếu là độc quyền cục bộ/trong nước.
- Nguyên nhân: Thị trường nhỏ, nhà nước kiểm soát chặt, phụ thuộc hạ tầng Big Tech (iOS/Android).

3. So sánh:
- Big Tech Mỹ: Toàn cầu, siêu lợi nhuận, quyền lực dữ liệu toàn cầu.
- Super-apps VN: Nội địa, lợi nhuận chưa ổn định, cạnh tranh cao hơn.

4. Góc nhìn Mác-Lênin:
- Big Tech là biểu hiện của chủ nghĩa tư bản độc quyền hiện đại.
- Lợi nhuận siêu ngạch đến từ dữ liệu, thuật toán và hệ sinh thái số (thay vì chỉ tư liệu sản xuất vật chất).

Hãy trả lời ngắn gọn, súc tích, dễ hiểu và bám sát nội dung trên, có thể trả lời sáng tạo theo kiến thức của bạn nếu câu hỏi có thể mở rộng hơn ngoài nội dung trên Nếu câu hỏi không liên quan đến chủ đề này, hãy khéo léo từ chối hoặc lái về chủ đề báo cáo.
`;

export async function POST(req: Request) {
  if (!apiKey || !genAI) {
    return NextResponse.json(
      { error: "API Key chưa được cấu hình. Vui lòng thêm GEMINI_API_KEY vào biến môi trường." },
      { status: 500 }
    );
  }

  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "Tôi đã hiểu nhiệm vụ. Tôi sẵn sàng trả lời các câu hỏi về Độc quyền Big Tech và Super-apps Việt Nam." }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Đã có lỗi xảy ra khi xử lý yêu cầu." },
      { status: 500 }
    );
  }
}
