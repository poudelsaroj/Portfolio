# AI Portfolio Website

A modern, interactive portfolio website showcasing AI/ML expertise with cutting-edge animations, neural network visualizations, and intelligent features.

## 🚀 Features

- **Modern AI-themed Design**: Futuristic interface with neural network animations
- **Interactive Components**: 
  - Animated neural network canvas background
  - AI model switcher with live metrics
  - Real-time detection system display
  - Interactive terminal interface
  - Scan overlay effects
- **Professional Portfolio Sections**:
  - Hero section with AI visualizations
  - Dynamic stats showcase
  - Skills & technologies grid
  - Project portfolio with filtering
  - Contact form with EmailJS integration
- **Live Chat Integration**: Tawk.to support for real-time communication
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Next.js 14 with static export for GitHub Pages
- **SEO Ready**: Proper meta tags and structured data

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS
- **Chat**: Tawk.to
- **Deployment**: GitHub Pages with custom domain

## 🏗 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with background effects
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Background/
│   │   ├── NeuralCanvas.tsx    # Animated neural network
│   │   └── ScanOverlay.tsx     # Futuristic scan effects
│   ├── Chat/
│   │   └── TawkTo.tsx          # Live chat integration
│   ├── Contact/
│   │   └── Contact.tsx         # Contact form with EmailJS
│   ├── Hero/
│   │   ├── Hero.tsx            # Main hero section
│   │   ├── AIVisualizer.tsx    # AI model visualization
│   │   ├── DetectionSystem.tsx # Real-time detection display
│   │   └── ModelSwitcher.tsx   # AI model selector
│   ├── Layout/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Navigation.tsx      # Main navigation
│   ├── Projects/
│   │   └── Projects.tsx        # Project showcase
│   ├── Skills/
│   │   └── Skills.tsx          # Skills & technologies
│   ├── Stats/
│   │   └── Stats.tsx           # Achievement statistics
│   └── Terminal/
│       └── Terminal.tsx        # Interactive terminal
├── types/
│   ├── ai.ts                   # AI-related type definitions
│   ├── contact.ts              # Contact form types
│   └── terminal.ts             # Terminal types
└── utils/
    └── aiModels.ts             # AI model configurations
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/poudelsaroj/Portfolio.git
   cd ai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```bash
   # EmailJS Configuration (Sign up at https://www.emailjs.com/)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

   # Tawk.to Configuration (Sign up at https://www.tawk.to/)
   NEXT_PUBLIC_TAWK_TO_ID=your_tawk_to_property_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

## 💬 Tawk.to Setup

1. Sign up at [Tawk.to](https://www.tawk.to/)
2. Create a new property for your website
3. Get your Property ID from the dashboard
4. Add it to your `.env.local` file

## 🌐 Deployment

### GitHub Pages with Custom Domain

1. **Configure repository**
   - Push code to GitHub
   - Enable GitHub Pages in repository settings
   - Set source to "GitHub Actions"

2. **Setup custom domain**
   - Add your domain to `public/CNAME`
   - Configure DNS records at your domain provider:
     ```
     Type: CNAME
     Name: @
     Value: poudelsaroj.github.io
     ```

3. **Deploy**
   ```bash
   npm run build
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

   The GitHub Action will automatically build and deploy your site.

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      'primary-blue': '#3B82F6',
      'primary-purple': '#8B5CF6',
      'primary-cyan': '#06B6D4',
      // Add your custom colors
    }
  }
}
```

### Content
Update the following files with your information:
- `src/app/page.tsx` - Main content
- `src/components/Hero/Hero.tsx` - Hero section
- `src/components/Projects/Projects.tsx` - Project data
- `src/components/Skills/Skills.tsx` - Skills and technologies
- `src/components/Stats/Stats.tsx` - Achievement statistics

### AI Models
Configure AI model data in `src/utils/aiModels.ts`:
```typescript
export const aiModels = [
  {
    name: "Your Model",
    accuracy: 99.2,
    speed: "15ms",
    description: "Description of your AI model"
  }
]
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

## 🔧 Troubleshooting

### Build Issues
- Make sure all environment variables are set
- Check that all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next` then `npm run build`

### TypeScript Errors
- The project is configured to build successfully even with IDE TypeScript errors
- Run `npm run build` to verify the actual build status

### Environment Variables
- Prefix all client-side variables with `NEXT_PUBLIC_`
- Restart development server after changing `.env.local`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/poudelsaroj/Portfolio/issues).

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
