# Abhinav's Amazon SDE Portfolio

A modern, dark-themed portfolio website built for Amazon SDE applications, showcasing skills in Python, Java, AWS, and React.

## 🚀 Live Demo

Visit the live portfolio: [https://abhinav-amazon-sde-portfolio-2024.vercel.app](https://abhinav-amazon-sde-portfolio-2024.vercel.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Customization](#customization)
- [License](#license)

## ✨ Features

- **Modern Dark Theme**: Professional dark theme with blue accent colors (#2563EB)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop views
- **Performance Optimized**: Next.js 14 with image optimization and lazy loading
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and contrast
- **SEO Friendly**: Proper metadata, Open Graph tags, and semantic HTML
- **Contact Form**: Integrated with Formspree for reliable message delivery
- **Project Showcase**: 3 detailed projects with live demos and source code links
- **Experience Timeline**: Vertical timeline highlighting professional background
- **Skills Section**: Interactive skill bars with technology icons

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) for skill icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth animations
- **Timeline**: [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
- **Forms**: Custom form handling with client-side validation
- **Deployment**: [Vercel](https://vercel.com/) for seamless deployment
- **Linting**: ESLint and Prettier for code quality

## 📁 Project Structure

```
abhinav-amazon-sde-portfolio-2024/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── layout.tsx          # Main layout wrapper
│   ├── header.tsx          # Navigation header
│   ├── footer.tsx          # Footer section
│   ├── project-card.tsx    # Reusable project card
│   ├── form-input.tsx      # Form input component
│   ├── form-button.tsx     # Form button component
│   └── timeline-item.tsx   # Timeline item component
├── sections/
│   ├── hero.tsx            # Hero section with name and title
│   ├── about.tsx           # About section with bio
│   ├── skills.tsx          # Skills section with icons
│   ├── projects.tsx        # Projects showcase
│   ├── experience.tsx      # Experience timeline
│   └── contact.tsx         # Contact form section
├── data/
│   └── projects.json       # Project data for dynamic rendering
├── public/
│   ├── abhinav-photo.jpg   # Profile photo
│   └── resume-abhinav.pdf  # Resume PDF
├── __tests__/              # Unit tests
├── cypress/                # End-to-end tests
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind configuration with design tokens
├── next.config.js          # Next.js configuration
├── .eslintrc.json          # ESLint configuration
└── .prettierrc             # Prettier configuration
```

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhinavpadige4/abhinav-amazon-sde-portfolio-2024.git
   cd abhinav-amazon-sde-portfolio-2024
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm run start
   ```

## 🚀 Deployment

This portfolio is deployed to Vercel. To deploy your own version:

1. Push this repository to GitHub
2. Import the repository in [Vercel](https://vercel.com/)
3. Vercel will automatically detect the Next.js project and deploy it
4. Configure environment variables if needed (for Formspree endpoint)

## 🎨 Customization

### Changing Theme Colors

The primary blue accent color is defined in `tailwind.config.js`:
```javascript
amazon: {
  500: '#0ea5e9', // Main blue
  // ... other shades
}
```

### Updating Content

- **About Section**: Edit `sections/about.tsx` to update bio and links
- **Skills**: Modify the skills array in `sections/skills.tsx`
- **Projects**: Update `data/projects.json` with your project details
- **Experience**: Edit the experience data in `sections/experience.tsx`
- **Contact Form**: Adjust form handling in `sections/contact.tsx`

### Adding New Sections

1. Create a new component in the `sections/` directory
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/header.tsx` if needed

## 🧪 Testing

### Unit Tests

Run unit tests with Jest and React Testing Library:
```bash
npm test
```

### End-to-End Tests

Run Cypress tests:
```bash
npm run cypress:open
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

## ♿ Accessibility

This portfolio follows WCAG 2.1 AA guidelines:
- Proper color contrast (dark background with light text)
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigable interface
- Focus visible indicators
- Responsive text scaling

## 🔍 SEO

- Proper page titles and meta descriptions
- Open Graph tags for social sharing
- Twitter card support
- Semantic HTML structure
- Fast loading performance
- Mobile-friendly design

## 📞 Contact

For questions or opportunities, reach out through the contact form on the website or email: abhinav@email.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for Amazon SDE applications**