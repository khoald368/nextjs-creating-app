## Detailed Plan for Creating the Landing Page for "benbien.vn"

### Overview
This plan outlines the steps required to create a modern landing page for "benbien.vn" using React, TailwindCSS, shadcn/ui components, and lucide-react icons. The design will focus on marine structure restoration and anti-corrosion services, with a clean, Apple-like UI.

### Step-by-Step Outline of Changes

#### 1. Create a New Page Component
- **File**: `src/app/page.tsx`
- **Changes**:
  - Create a functional component for the landing page.
  - Import necessary components from `shadcn/ui` and `lucide-react`.
  - Structure the page layout with sections as described in the task.

#### 2. Header Section
- **File**: `src/app/page.tsx`
- **Changes**:
  - Use `NavigationMenu` from `shadcn/ui` for the header.
  - Add a logo placeholder with the text "benbien.vn".
  - Create navigation tabs in Vietnamese:
    - Sản phẩm/Dịch vụ
    - Sách báo/Tiêu chuẩn
    - Công bố khoa học
    - Tin mới
    - Liên hệ
  - Add a button for “Nhận tư vấn miễn phí”.

#### 3. Hero Section
- **File**: `src/app/page.tsx`
- **Changes**:
  - Create a hero section with a background image of the sea or marine construction.
  - Overlay with a light ocean blue gradient.
  - Add an H1 title: “Khôi phục công trình biển – Chống ăn mòn, bảo vệ kết cấu”.
  - Include a short description of services.
  - Add two buttons: “Tìm hiểu dịch vụ” and “Báo giá nhanh”.

#### 4. Products/Services Section
- **File**: `src/app/page.tsx`
- **Changes**:
  - Create a grid of 4 cards using `Card` from `shadcn/ui`.
  - Each card should include:
    - A lucide-react icon
    - Vietnamese title
    - Short description
    - Button “Xem chi tiết”
  - Card design: white background with a hover effect of light blue shadow.

#### 5. Books/Standards Section
- **File**: `src/app/page.tsx`
- **Changes**:
  - Create 4 cards similar to the Products/Services section.
  - Each card should include:
    - Cover image placeholder
    - Vietnamese title
    - Short description
    - Button “Xem tài liệu”.

#### 6. Scientific Publications Section
- **File**: `src/app/page.tsx`
- **Changes**:
  - Create 4 cards for scientific publications.
  - Each card should include:
    - Publication title (Vietnamese)
    - Author/year
    - Short abstract
    - Button “Đọc tóm tắt”.

#### 7. News Section
- **File**: `src/app/page.tsx`
- **Changes**:
  - Create a list of blog/news cards.
  - Each post should include:
    - Image placeholder
    - Vietnamese title
    - Date
    - Excerpt
    - Button “Đọc tiếp”.
  - Include an input for search and a select for filtering by category.

#### 8. Contact Section
- **File**: `src/app/page.tsx`
- **Changes**:
  - Create a contact form using `Input` and `Textarea` from `shadcn/ui`.
  - Fields: Họ tên, Email, Số điện thoại, Công ty, Nội dung.
  - Add a checkbox: “Yêu cầu báo giá”.
  - Button: “Gửi yêu cầu”.
  - Include address, hotline, email, and a Google Maps placeholder.
  - Form design: white with blue accents.

#### 9. Footer Section
- **File**: `src/app/page.tsx`
- **Changes**:
  - Add a separator in light ocean blue.
  - Include quick links and copyright text: “© 2025 benbien.vn”.
  - Add social icons using `lucide-react`.
  - Include an input and button for email subscription.

### UI/UX Considerations
- Ensure the design is responsive and mobile-first.
- Use TailwindCSS for styling and layout.
- Maintain a clean and minimalistic design with bold typography.
- Implement hover effects for buttons and cards for better interactivity.

### Error Handling and Best Practices
- Validate form inputs before submission.
- Use appropriate aria-labels for accessibility.
- Ensure images have alt text for better SEO and accessibility.
- Implement graceful error handling for form submissions.

### Summary
- Create a new landing page component in `src/app/page.tsx`.
- Implement header, hero, products/services, books/standards, scientific publications, news, contact, and footer sections.
- Use shadcn/ui components for consistency and lucide-react for icons.
- Ensure a responsive, clean, and professional design with a focus on user experience.
- Follow best practices for accessibility and error handling throughout the implementation.
