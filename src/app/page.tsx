"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { 
  Anchor, 
  Shield, 
  Wrench, 
  FileText, 
  BookOpen, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Search,
  Calendar
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#1D1D1F]">benbien.vn</div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-1">
                <li>
                  <a 
                    href="#sanpham" 
                    className="px-4 py-2 text-[#515154] hover:text-[#2D9CDB] transition-colors rounded-md hover:bg-[#2D9CDB]/5"
                  >
                    Sản phẩm/Dịch vụ
                  </a>
                </li>
                <li>
                  <a 
                    href="#sachbao" 
                    className="px-4 py-2 text-[#515154] hover:text-[#2D9CDB] transition-colors rounded-md hover:bg-[#2D9CDB]/5"
                  >
                    Sách báo/Tiêu chuẩn
                  </a>
                </li>
                <li>
                  <a 
                    href="#congbo" 
                    className="px-4 py-2 text-[#515154] hover:text-[#2D9CDB] transition-colors rounded-md hover:bg-[#2D9CDB]/5"
                  >
                    Công bố khoa học
                  </a>
                </li>
                <li>
                  <a 
                    href="#tinmoi" 
                    className="px-4 py-2 text-[#515154] hover:text-[#2D9CDB] transition-colors rounded-md hover:bg-[#2D9CDB]/5"
                  >
                    Tin mới
                  </a>
                </li>
                <li>
                  <a 
                    href="#lienhe" 
                    className="px-4 py-2 text-[#515154] hover:text-[#2D9CDB] transition-colors rounded-md hover:bg-[#2D9CDB]/5"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </nav>

            {/* CTA Button */}
            <Button className="bg-[#2D9CDB] hover:bg-[#2D9CDB]/90 text-white rounded-full px-6">
              Nhận tư vấn miễn phí
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-6 leading-tight">
              Khôi phục công trình biển – Chống ăn mòn, bảo vệ kết cấu
            </h1>
            <p className="text-lg sm:text-xl text-[#515154] mb-8 max-w-2xl mx-auto">
              Chuyên cung cấp giải pháp toàn diện cho việc bảo vệ và khôi phục các công trình biển với công nghệ tiên tiến nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#2D9CDB] hover:bg-[#2D9CDB]/90 text-white rounded-full px-8 py-3 text-lg">
                Tìm hiểu dịch vụ
              </Button>
              <Button size="lg" variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full px-8 py-3 text-lg">
                Báo giá nhanh
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section id="sanpham" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-4">Sản phẩm & Dịch vụ</h2>
            <p className="text-xl text-[#515154] max-w-2xl mx-auto">
              Giải pháp chuyên nghiệp cho mọi nhu cầu bảo vệ và khôi phục công trình biển
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Anchor className="w-8 h-8 text-[#2D9CDB]" />
                </div>
                <CardTitle className="text-[#1D1D1F]">Khôi phục kết cấu</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-[#515154] mb-4">
                  Dịch vụ khôi phục và sửa chữa các kết cấu bê tông, thép bị hư hỏng do môi trường biển.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full">
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#2D9CDB]" />
                </div>
                <CardTitle className="text-[#1D1D1F]">Chống ăn mòn</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-[#515154] mb-4">
                  Hệ thống bảo vệ chống ăn mòn hiện đại cho các công trình thép và bê tông cốt thép.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full">
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-[#2D9CDB]" />
                </div>
                <CardTitle className="text-[#1D1D1F]">Bảo trì định kỳ</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-[#515154] mb-4">
                  Chương trình bảo trì và kiểm tra định kỳ để đảm bảo tuổi thọ công trình.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full">
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#2D9CDB]" />
                </div>
                <CardTitle className="text-[#1D1D1F]">Tư vấn kỹ thuật</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-[#515154] mb-4">
                  Dịch vụ tư vấn chuyên sâu về thiết kế và giải pháp bảo vệ công trình biển.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full">
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Books/Standards Section */}
      <section id="sachbao" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-4">Sách báo & Tiêu chuẩn</h2>
            <p className="text-xl text-[#515154] max-w-2xl mx-auto">
              Tài liệu chuyên môn và tiêu chuẩn kỹ thuật trong lĩnh vực công trình biển
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d27d325c-b9fd-46ce-8ff2-fba7e6ef6003.png" 
                  alt="Tiêu chuẩn xây dựng công trình biển"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-[#1D1D1F]">Tiêu chuẩn xây dựng công trình biển</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#515154] mb-4">
                  Hướng dẫn chi tiết về các tiêu chuẩn kỹ thuật trong thiết kế và thi công công trình biển.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full w-full">
                  Xem tài liệu
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/72060921-de4a-4669-ad17-93524b79373d.png" 
                  alt="Cẩm nang chống ăn mòn"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-[#1D1D1F]">Cẩm nang chống ăn mòn</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#515154] mb-4">
                  Kiến thức toàn diện về các phương pháp và công nghệ chống ăn mòn hiện đại.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full w-full">
                  Xem tài liệu
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/42234491-0171-47df-90ca-33353f0dbdfe.png" 
                  alt="Hướng dẫn bảo trì kết cấu biển"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-[#1D1D1F]">Hướng dẫn bảo trì kết cấu biển</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#515154] mb-4">
                  Quy trình và phương pháp bảo trì hiệu quả cho các loại kết cấu công trình biển.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full w-full">
                  Xem tài liệu
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f01426c-77bf-4a17-99e5-427b6956e847.png" 
                  alt="Tiêu chuẩn an toàn quốc tế"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-[#1D1D1F]">Tiêu chuẩn an toàn quốc tế</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#515154] mb-4">
                  Các tiêu chuẩn an toàn quốc tế áp dụng cho công trình và hoạt động biển.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full w-full">
                  Xem tài liệu
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scientific Publications Section */}
      <section id="congbo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-4">Công bố khoa học</h2>
            <p className="text-xl text-[#515154] max-w-2xl mx-auto">
              Nghiên cứu và phát triển công nghệ mới trong lĩnh vực bảo vệ công trình biển
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#2D9CDB]" />
                </div>
                <CardTitle className="text-[#1D1D1F] text-lg">Công nghệ nano trong chống ăn mòn biển</CardTitle>
                <CardDescription className="text-sm text-[#515154]">Nguyễn Văn A, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#515154] mb-4 text-sm">
                  Nghiên cứu ứng dụng công nghệ nano để tăng cường hiệu quả bảo vệ chống ăn mòn cho các kết cấu thép trong môi trường biển khắc nghiệt.
                </p>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full w-full">
                  Đọc tóm tắt
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#2D9CDB]" />
                </div>
                <CardTitle className="text-[#1D1D1F] text-lg">Đánh giá tuổi thọ cầu cảng bê tông cốt thép</CardTitle>
                <CardDescription className="text-sm text-[#515154]">Trần Thị B, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#515154] mb-4 text-sm">
                  Phương pháp đánh giá và dự báo tuổi thọ của các công trình cầu cảng bê tông cốt thép dựa trên mô hình toán học tiên tiến.
                </p>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full w-full">
                  Đọc tóm tắt
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#2D9CDB]" />
                </div>
                <CardTitle className="text-[#1D1D1F] text-lg">Hệ thống bảo vệ cathodic thông minh</CardTitle>
                <CardDescription className="text-sm text-[#515154]">Lê Văn C, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#515154] mb-4 text-sm">
                  Phát triển hệ thống bảo vệ cathodic tự động với khả năng giám sát và điều chỉnh thông minh cho công trình biển.
                </p>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full w-full">
                  Đọc tóm tắt
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-[#2D9CDB]" />
                </div>
                <CardTitle className="text-[#1D1D1F] text-lg">Vật liệu composite trong sửa chữa kết cấu</CardTitle>
                <CardDescription className="text-sm text-[#515154]">Phạm Văn D, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#515154] mb-4 text-sm">
                  Ứng dụng vật liệu composite tiên tiến trong việc gia cường và sửa chữa các kết cấu bê tông bị hư hỏng.
                </p>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full w-full">
                  Đọc tóm tắt
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="tinmoi" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-4">Tin mới</h2>
            <p className="text-xl text-[#515154] max-w-2xl mx-auto">
              Cập nhật những tin tức mới nhất về công nghệ và dự án trong lĩnh vực công trình biển
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#515154] w-4 h-4" />
              <Input 
                placeholder="Tìm kiếm tin tức..." 
                className="pl-10 rounded-full border-[#2D9CDB]/30 focus:border-[#2D9CDB]"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48 rounded-full border-[#2D9CDB]/30">
                <SelectValue placeholder="Danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="technology">Công nghệ</SelectItem>
                <SelectItem value="projects">Dự án</SelectItem>
                <SelectItem value="research">Nghiên cứu</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader className="p-0">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d0ec8df9-3cc6-4b98-b8d9-879e711dd4ef.png" 
                  alt="Dự án công trình biển hiện đại"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#515154] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>15/12/2024</span>
                </div>
                <CardTitle className="text-[#1D1D1F] mb-3">Hoàn thành dự án khôi phục cầu cảng Hải Phòng</CardTitle>
                <CardDescription className="text-[#515154] mb-4">
                  Dự án khôi phục và nâng cấp cầu cảng Hải Phòng đã hoàn thành với công nghệ chống ăn mòn tiên tiến, kéo dài tuổi thọ công trình lên 50 năm.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full">
                  Đọc tiếp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader className="p-0">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b3db74d-c8a1-466b-84bb-21eb424a39de.png" 
                  alt="Công nghệ chống ăn mòn mới"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#515154] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>10/12/2024</span>
                </div>
                <CardTitle className="text-[#1D1D1F] mb-3">Công nghệ chống ăn mòn thế hệ mới</CardTitle>
                <CardDescription className="text-[#515154] mb-4">
                  Nghiên cứu thành công công nghệ chống ăn mòn sử dụng vật liệu nano, giảm 80% chi phí bảo trì và tăng hiệu quả bảo vệ.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full">
                  Đọc tiếp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <CardHeader className="p-0">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62862135-fee9-4d1d-b349-2f7b8bd34d57.png" 
                  alt="Hội thảo quốc tế về công trình biển"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#515154] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>05/12/2024</span>
                </div>
                <CardTitle className="text-[#1D1D1F] mb-3">Hội thảo quốc tế về công trình biển 2024</CardTitle>
                <CardDescription className="text-[#515154] mb-4">
                  Tham gia hội thảo quốc tế với các chuyên gia hàng đầu thế giới, chia sẻ những tiến bộ mới nhất trong lĩnh vực bảo vệ công trình biển.
                </CardDescription>
                <Button variant="outline" className="border-[#2D9CDB] text-[#2D9CDB] hover:bg-[#2D9CDB] hover:text-white rounded-full">
                  Đọc tiếp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="lienhe" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-4">Liên hệ</h2>
            <p className="text-xl text-[#515154] max-w-2xl mx-auto">
              Hãy để lại thông tin để nhận tư vấn miễn phí từ các chuyên gia của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-[#1D1D1F] mb-6">Gửi yêu cầu tư vấn</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#1D1D1F] mb-2 block">Họ tên *</label>
                      <Input 
                        placeholder="Nhập họ và tên" 
                        className="rounded-lg border-[#2D9CDB]/30 focus:border-[#2D9CDB]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1D1D1F] mb-2 block">Email *</label>
                      <Input 
                        type="email"
                        placeholder="Nhập email" 
                        className="rounded-lg border-[#2D9CDB]/30 focus:border-[#2D9CDB]"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#1D1D1F] mb-2 block">Số điện thoại *</label>
                      <Input 
                        placeholder="Nhập số điện thoại" 
                        className="rounded-lg border-[#2D9CDB]/30 focus:border-[#2D9CDB]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1D1D1F] mb-2 block">Công ty</label>
                      <Input 
                        placeholder="Tên công ty" 
                        className="rounded-lg border-[#2D9CDB]/30 focus:border-[#2D9CDB]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-[#1D1D1F] mb-2 block">Nội dung *</label>
                    <Textarea 
                      placeholder="Mô tả chi tiết yêu cầu của bạn..."
                      rows={4}
                      className="rounded-lg border-[#2D9CDB]/30 focus:border-[#2D9CDB]"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="quote" className="border-[#2D9CDB] data-[state=checked]:bg-[#2D9CDB]" />
                    <label htmlFor="quote" className="text-sm text-[#515154]">
                      Yêu cầu báo giá chi tiết
                    </label>
                  </div>
                  
                  <Button className="w-full bg-[#2D9CDB] hover:bg-[#2D9CDB]/90 text-white rounded-lg py-3">
                    Gửi yêu cầu
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#2D9CDB]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D1D1F] mb-2">Địa chỉ</h3>
                      <p className="text-[#515154]">
                        123 Đường Lê Lợi, Quận 1<br />
                        Thành phố Hồ Chí Minh, Việt Nam
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#2D9CDB]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D1D1F] mb-2">Hotline</h3>
                      <p className="text-[#515154]">
                        +84 (028) 1234 5678<br />
                        +84 (028) 8765 4321
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2D9CDB]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#2D9CDB]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D1D1F] mb-2">Email</h3>
                      <p className="text-[#515154]">
                        info@benbien.vn<br />
                        support@benbien.vn
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Placeholder */}
              <Card className="bg-white p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-[#1D1D1F] mb-4">Vị trí trên bản đồ</h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img 
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ea1361af-940a-4c25-9001-24384d3b9bc2.png" 
                      alt="Bản đồ vị trí văn phòng benbien.vn"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1D1F] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Separator className="mb-12 bg-[#2D9CDB]/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">benbien.vn</h3>
              <p className="text-gray-300 mb-4">
                Chuyên gia hàng đầu trong lĩnh vực khôi phục công trình biển và chống ăn mòn tại Việt Nam.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#2D9CDB]/20 rounded-full flex items-center justify-center hover:bg-[#2D9CDB] transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-[#2D9CDB]/20 rounded-full flex items-center justify-center hover:bg-[#2D9CDB] transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-[#2D9CDB]/20 rounded-full flex items-center justify-center hover:bg-[#2D9CDB] transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Sản phẩm/Dịch vụ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Sách báo/Tiêu chuẩn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Công bố khoa học</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Tin mới</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Khôi phục kết cấu</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Chống ăn mòn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Bảo trì định kỳ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#2D9CDB] transition-colors">Tư vấn kỹ thuật</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Đăng ký nhận tin</h4>
              <p className="text-gray-300 mb-4">Nhận thông tin mới nhất về công nghệ và dự án</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Email của bạn" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg"
                />
                <Button className="bg-[#2D9CDB] hover:bg-[#2D9CDB]/90 text-white rounded-lg px-4">
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>

          <Separator className="mb-8 bg-[#2D9CDB]/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 benbien.vn. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-[#2D9CDB] text-sm transition-colors">Chính sách bảo mật</a>
              <a href="#" className="text-gray-300 hover:text-[#2D9CDB] text-sm transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
