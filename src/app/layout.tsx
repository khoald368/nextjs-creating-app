import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "benbien.vn - Khôi phục công trình biển & Chống ăn mòn",
  description: "Dịch vụ khôi phục công trình biển, chống ăn mòn và bảo vệ kết cấu chuyên nghiệp tại Việt Nam",
  keywords: "khôi phục công trình biển, chống ăn mòn, bảo vệ kết cấu, marine restoration",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
