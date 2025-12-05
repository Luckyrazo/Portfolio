# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 **Modern Design** - Clean and professional layout with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Interactive** - Smooth scrolling, animated sections, and interactive navigation
- 🎯 **Sections Included**:
  - Hero section with introduction
  - About me section
  - Skills showcase
  - Projects portfolio
  - Contact form
  - Footer with social links

## Getting Started

### Prerequisites

To view this website, you'll need a web browser and optionally a local server.

### Installation

1. Clone or download this repository
2. Open the project folder

### Running the Website

#### Option 1: Direct File Opening

Simply open `index.html` in your web browser.

#### Option 2: Using Live Server (Recommended)

If you have the Live Server extension installed in VS Code:

1. Right-click on `index.html`
2. Select "Open with Live Server"

```vscode-extensions
ritwickdey.liveserver
```

#### Option 3: Using Python

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

#### Option 4: Using Node.js

If you have Node.js installed:

```bash
npx serve
```

## Customization

### Updating Your Information

1. **Personal Details** (`index.html`):

   - Update "Your Name" in the hero section
   - Modify the about me text
   - Update skills and technologies
   - Add your actual projects
   - Replace placeholder links with your social media

2. **Styling** (`styles.css`):

   - Change color scheme by modifying CSS variables in `:root`
   - Adjust spacing, fonts, or animations as needed

3. **Functionality** (`script.js`):
   - Modify form handling to connect to your backend
   - Add additional interactive features

### Color Customization

The website uses CSS variables for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
  --primary-color: #6366f1; /* Main brand color */
  --secondary-color: #8b5cf6; /* Accent color */
  --text-color: #1f2937; /* Main text color */
  --text-light: #6b7280; /* Secondary text color */
}
```

## Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Documentation
└── .github/
    └── copilot-instructions.md
```

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)

## Features in Detail

### Responsive Navigation

- Fixed navigation bar with smooth scrolling
- Mobile-friendly hamburger menu
- Active section highlighting

### Smooth Animations

- Fade-in animations on scroll
- Hover effects on cards and buttons
- Smooth transitions throughout

### Contact Form

- Client-side validation
- Ready to connect to backend service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Consider adding:

- Dark mode toggle
- Blog section
- Project filtering
- Backend for contact form
- SEO optimization
- Analytics integration

## License

This project is free to use for personal portfolios.

## Author

Your Name - Update with your contact information

---

Made with ❤️ using HTML, CSS, and JavaScript
