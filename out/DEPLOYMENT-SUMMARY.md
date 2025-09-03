# 🚀 benbien.vn - Production Deployment Package

## 📋 Package Contents

This directory contains the complete production-ready static files for the **benbien.vn** Vietnamese marine construction services website.

### ✅ Files Included:
- **index.html** - Main landing page (optimized and minified)
- **404.html** - Custom 404 error page
- **web.config** - IIS configuration file with routing and optimization
- **_next/** - Next.js optimized assets (CSS, JS, fonts)
- **Static assets** - SVG icons and images
- **README-IIS-Deployment.md** - Detailed deployment instructions

## 🌟 Website Features

### **Complete Vietnamese Landing Page:**
- ✅ **Header** with smooth scrolling navigation
- ✅ **Hero Section** with ocean blue branding (#2D9CDB)
- ✅ **Products/Services** section (4 service cards)
- ✅ **Books/Standards** section (4 document cards)
- ✅ **Scientific Publications** section (4 research papers)
- ✅ **News** section with search and filtering
- ✅ **Contact** section with professional form
- ✅ **Footer** with company info and newsletter signup

### **Navigation Features:**
- ✅ **Smooth scrolling** to sections via anchor links
- ✅ **Responsive design** for all device sizes
- ✅ **Ocean blue hover effects** (#2D9CDB)
- ✅ **Professional typography** and spacing

### **Technical Optimizations:**
- ✅ **Static export** optimized for IIS hosting
- ✅ **SEO-friendly** with proper meta tags
- ✅ **Performance optimized** with Next.js build system
- ✅ **Accessibility compliant** with proper ARIA labels
- ✅ **Vietnamese language** support (lang="vi")

## 🔧 IIS Deployment

### **Quick Setup:**
1. Copy all files to IIS website root directory
2. Ensure **URL Rewrite Module 2.0** is installed
3. Set **index.html** as default document
4. Configure application pool (No Managed Code recommended)

### **web.config Features:**
- ✅ **Client-side routing** support
- ✅ **Static file caching** (30-day cache headers)
- ✅ **GZIP compression** enabled
- ✅ **Security headers** configured
- ✅ **MIME types** for modern web assets
- ✅ **Trailing slash handling** for SEO

## 📊 Build Statistics

```
Route (app)                                 Size  First Load JS    
┌ ○ /                                    43.4 kB         145 kB
└ ○ /_not-found                            977 B         102 kB
+ First Load JS shared by all             101 kB
```

## 🎯 Performance Features

- **Optimized images** with proper alt text
- **Minified CSS/JS** for faster loading
- **Font preloading** for better performance
- **Lazy loading** where appropriate
- **Compressed assets** via build process

## 🔍 SEO Optimization

- **Vietnamese meta tags** and descriptions
- **Structured HTML** with semantic elements
- **Proper heading hierarchy** (H1, H2, H3)
- **Image alt attributes** for accessibility
- **Clean URL structure** with trailing slashes

## 📱 Responsive Design

- **Mobile-first** approach
- **Tablet and desktop** optimizations
- **Touch-friendly** navigation
- **Flexible grid** layouts
- **Scalable typography**

## 🎨 Design System

- **Ocean blue** primary color (#2D9CDB)
- **Clean typography** with proper contrast
- **Apple-like** minimalist design
- **Consistent spacing** and alignment
- **Professional** business appearance

## 🚀 Ready for Production

This package is **production-ready** and includes:
- ✅ All optimized static files
- ✅ IIS configuration
- ✅ Deployment documentation
- ✅ Performance optimizations
- ✅ Security configurations

---

**Website**: benbien.vn  
**Technology**: Next.js 15 + TypeScript + Tailwind CSS  
**Deployment**: Static Export for IIS  
**Language**: Vietnamese (vi)  
**Theme**: Marine Construction & Anti-Corrosion Services
