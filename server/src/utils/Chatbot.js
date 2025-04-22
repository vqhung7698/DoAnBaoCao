const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

//  Khởi tạo Gemini AI
const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const modelProduct = require("../models/products.model");

async function askQuestion(question) {
  try {
    const products = await modelProduct.find({});
    // Duyệt qua từng SP và định dạng lại
    // const productData = products
    //   .map(
    //     (product) => `
    //     Tên: ${product.name}
    //     Giá: ${product.price.toLocaleString("vi-VN")}đ ${
    //       product.priceDiscount
    //         ? `(Giảm giá: ${product.priceDiscount.toLocaleString("vi-VN")}đ)`
    //         : ""
    //     }
    //     Thông số kỹ thuật:
    //     - CPU: ${product.cpu}
    //     - Màn hình: ${product.screen} (${product.screenHz})
    //     - Card đồ họa: ${product.gpu}
    //     - RAM: ${product.ram}
    //     - Ổ cứng: ${product.storage}
    //     - Pin: ${product.battery}
    //     - Camera: ${product.camera}
    //     - Cân nặng: ${product.weight}
    //     - Số lượng còn lại: ${product.stock}
    //   `
    //   )
    //   .join("\n----------------------------------------\n");

    // Tạo prompt cho AI
    // const prompt = `
    //     Bạn là một chuyên viên tư vấn các sản phẩm công nghệ chuyên nghiệp.
    //     Đây là danh sách laptop hiện có trong cửa hàng:
    //     ${productData}

    //     Câu hỏi của khách hàng: "${question}"

    //     Hãy tư vấn một cách chuyên nghiệp, thân thiện và chi tiết:
    //     1. Phân tích nhu cầu của khách hàng
    //     2. Đề xuất các sản phẩm phù hợp từ danh sách trên
    //     3. Giải thích lý do đề xuất và so sánh ưu/nhược điểm
    //     4. Đưa ra lời khuyên cuối cùng

    //     Trả lời bằng tiếng Việt, sử dụng từ ngữ dễ hiểu.
    //     `;

    const productData = products
      .map(
        (product) =>
          `### 📦 **${product.name}**
          - 💰 **Giá**: ${product.price.toLocaleString("vi-VN")}đ ${
            product.priceDiscount
              ? `(_Giảm còn_: **${product.priceDiscount.toLocaleString(
                  "vi-VN"
                )}đ**)`
              : ""
          }

        - ⚙️ **CPU**: ${product.cpu}
        - 🖥️ **Màn hình**: ${product.screen} (${product.screenHz})
        - 🎮 **Card đồ họa**: ${product.gpu}
        - 🧠 **RAM**: ${product.ram}
        - 💾 **Ổ cứng**: ${product.storage}
        - 🔋 **Pin**: ${product.battery}
        - 📷 **Camera**: ${product.camera}
        - ⚖️ **Cân nặng**: ${product.weight}
        - 📦 **Tồn kho**: ${product.stock}

---
`
      )
      .join("\n");

    const prompt = `
        Bạn là một chuyên viên tư vấn các sản phẩm công nghệ chuyên nghiệp. 
        Dưới đây là danh sách laptop hiện có trong cửa hàng (định dạng Markdown):

        ${productData}

        Khách hàng hỏi: "${question}"

        Hãy tư vấn một cách chuyên nghiệp, thân thiện và dễ hiểu:
        1. Phân tích nhu cầu của khách
        2. Gợi ý sản phẩm phù hợp (từ danh sách trên)
        3. So sánh ưu/nhược điểm
        4. Kết luận rõ ràng và lời khuyên hữu ích

        Trả lời bằng **tiếng Việt** và sử dụng **Markdown** nếu cần để trình bày dễ hiểu.
        `;

    // Gửi prompt cho AI và nhận phản hồi
    const result = await model.generateContent(prompt);
    const answer = result.response.text();
    return answer;
  } catch (error) {
    console.log(error);
    return "Xin lỗi, đã có lỗi xảy ra trong quá trình xử lý câu hỏi của bạn.";
  }
}

module.exports = { askQuestion };
