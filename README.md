# AI Consulting Service - Landing Page

A professional, fully responsive landing page for an AI Consulting Business built with HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Clean, professional UI with gradient effects and smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Working Contact Form**: Fully functional contact form with real-time validation
- **Smooth Animations**: Intersection Observer animations and scroll effects
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Validation**: Client-side validation with error messages
- **Accessible**: Semantic HTML and proper ARIA labels

## Sections

1. **Navigation Bar**: Fixed header with smooth scroll navigation
2. **Hero Section**: Eye-catching hero with call-to-action buttons
3. **Services Section**: Grid layout showcasing 6 key services
4. **About Section**: Company information with statistics and features
5. **Contact Section**: Working contact form with validation
6. **Footer**: Links and company information

## Getting Started

### Method 1: Direct File Open (Simplest)
1. Navigate to the project folder
2. Double-click `index.html` to open it in your default browser
3. That's it! No installation needed.

### Method 2: Using a Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

**Using Node.js (if you have it installed):**
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run the server
http-server -p 8000
```
Then open `http://localhost:8000` in your browser.

**Using VS Code:**
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Using PHP (if installed):**
```bash
php -S localhost:8000
```

### Why Use a Local Server?
- Better for testing (avoids CORS issues)
- More realistic development environment
- Hot reload capabilities (with Live Server)

**Note**: No build process or dependencies required - pure HTML/CSS/JS

## Form Submission

The contact form includes:
- Real-time field validation
- Email format validation
- Required field checking
- Success/error message display
- Form reset after successful submission

**Note**: Currently, the form logs data to the console. To make it functional, integrate with your backend API by updating the form submission handler in `script.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

- Colors: Edit CSS variables in `:root` selector in `style.css`
- Content: Update text in `index.html`
- Form endpoint: Modify the form submission handler in `script.js`

## File Structure

```
├── index.html      # Main HTML structure
├── style.css       # All styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```
