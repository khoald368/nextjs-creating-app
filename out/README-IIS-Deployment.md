# IIS Deployment Guide for benbien.vn

## 📁 Production Files Ready for IIS Hosting

This directory contains all the static files needed to host the benbien.vn website on IIS (Internet Information Services).

## 🚀 Deployment Steps

### 1. Prerequisites
- Windows Server with IIS installed
- IIS URL Rewrite Module 2.0 (required for web.config rules)
- .NET Framework (for web.config processing)

### 2. Upload Files
1. Copy all files from this `out` directory to your IIS website root directory
2. Ensure all subdirectories (`_next/`, `404/`) are included
3. The `web.config` file must be in the root directory

### 3. IIS Configuration
1. **Create New Website** or use existing site
2. **Set Physical Path** to the directory containing these files
3. **Application Pool**: Use "No Managed Code" or ".NET Framework v4.0"
4. **Default Document**: Ensure `index.html` is set as default document

### 4. Required IIS Modules
Ensure these modules are installed and enabled:
- **URL Rewrite Module 2.0** (for client-side routing)
- **Static Content** (for serving files)
- **HTTP Compression** (for performance)

### 5. File Structure
```
/
├── index.html              # Main page
├── 404.html               # 404 error page
├── web.config             # IIS configuration
├── *.svg                  # Static assets
├── _next/                 # Next.js build assets
│   ├── static/           # CSS, JS, and other assets
│   └── [build-id]/       # Versioned assets
└── 404/                  # 404 page directory
    └── index.html
```

### 6. Features Configured
- ✅ **Client-side routing** with proper fallbacks
- ✅ **Static file serving** with optimal caching
- ✅ **MIME types** for modern web assets
- ✅ **Security headers** (XSS protection, content sniffing prevention)
- ✅ **Compression** for better performance
- ✅ **Trailing slash handling** for SEO

### 7. Testing
1. Navigate to your domain/IP address
2. Test navigation links (should scroll smoothly to sections)
3. Verify all images and assets load correctly
4. Check responsive design on mobile devices

### 8. Performance Optimization
The web.config includes:
- **30-day caching** for static assets
- **Gzip compression** for text files
- **Proper MIME types** for all file formats

### 9. Troubleshooting
- **404 errors**: Ensure URL Rewrite Module is installed
- **Missing styles**: Check that `_next/static/` directory is accessible
- **Routing issues**: Verify web.config is in the root directory
- **Images not loading**: Confirm all image URLs are accessible

### 10. SSL/HTTPS Setup (Recommended)
1. Install SSL certificate in IIS
2. Enable HTTPS binding
3. Set up HTTP to HTTPS redirect if needed

## 📞 Support
For technical support with the website functionality, contact the development team.
For IIS-specific issues, consult your system administrator.

---
**Website**: benbien.vn  
**Built with**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui  
**Deployment**: Static Export for IIS
