# Internship Task 2 - Templating Engine & Bundler Implementation

A complete implementation of Internship Task 1 using **Handlebars templating engine** and **Vite bundler**, following the JAMstack architecture principles.

## Project Overview

This project recreates the Bootstrap Framework Guide documentation with a modern tech stack that emphasizes separation of concerns, reusability, and efficient build processes.

### Key Features
- ✅ **Handlebars Templating**: Modular template structure with layout and content separation
- ✅ **Vite Bundler**: Fast, zero-config build tool with hot module replacement during development
- ✅ **Responsive Design**: Mobile-first approach with smooth animations
- ✅ **Professional Styling**: Modern gradient design with hover effects and transitions
- ✅ **Emoji Integration**: Rich visual content with emojis throughout
- ✅ **Clickable Links**: All external links properly configured and styled

## Technology Stack

### Templating Engine: Handlebars
- **Why Handlebars?** Simple, intuitive syntax with powerful logic-less templates
- **Benefits:**
  - Separates content from presentation
  - Reusable layout and partial templates
  - Easy to maintain and extend
  - Compiler-friendly

### Bundler: Vite
- **Why Vite?** Modern, lightning-fast build tool with excellent development experience
- **Benefits:**
  - Near-instant server startup
  - Hot Module Replacement (HMR) for instant feedback
  - Optimized production builds
  - Native ES modules support
  - Zero configuration out of the box

## Project Structure

```
project/
├── src/
│   ├── templates/
│   │   ├── layout.hbs          # Main HTML layout template
│   │   └── index.hbs           # Page content template
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css       # All styling
│   │   └── js/
│   │       └── main.js         # Client-side JavaScript
│   └── main.js                 # Vite entry point
├── dist/                       # Compiled output (generated)
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## Installation

### Prerequisites
- Node.js 16+ (LTS recommended)
- npm or yarn package manager

### Steps

1. **Clone/Extract the project**
   ```bash
   cd internship-task-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm list
   ```

## Running the Project

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
- Opens automatically at `http://localhost:5173`
- Changes in templates, styles, or scripts reload instantly
- Uses Handlebars templates compiled at runtime

### Production Build
Create an optimized production build:
```bash
npm run build
```
- Output: `dist/` folder
- Includes compiled HTML, CSS, and JavaScript
- Ready for deployment

### Preview Production Build
Test the production build locally:
```bash
npm run preview
```
- Serves the built files from `dist/` folder
- Verifies production build works correctly

## How It Works

### Template Compilation Process

1. **Layout Template** (`src/templates/layout.hbs`)
   - Defines the HTML structure
   - Contains placeholders for `{{title}}` and `{{{body}}}`
   - Includes CSS and JavaScript references

2. **Content Template** (`src/templates/index.hbs`)
   - Contains all page content
   - Uses Handlebars variables like `{{currentDate}}`
   - Fully semantic HTML structure

3. **Compilation** (`src/main.js`)
   - Handlebars compiles both templates
   - Injects `currentDate` and `title` data
   - Inserts compiled body content into layout
   - Renders final HTML to the page

### Vite Build Process

- **Development**: Templates compiled on-the-fly during development
- **Production**: Static HTML generated and optimized during build

## Content Sections

### 1. Getting Started
Introduction to Bootstrap framework and resource overview

### 2. Bootstrap Documentation
Direct links to official Bootstrap resources:
- Official website
- Pre-built examples

### 3. Core Components
Documentation for 6 essential Bootstrap components:
- Navbar
- Card
- Carousel
- Forms
- Modal
- Additional Components

### 4. Deployment & Hosting
Links to three popular hosting platforms:
- GitHub Pages
- Netlify
- Vercel

### 5. Best Practices
Seven development best practices:
- Responsive design
- Customization
- Code organization
- Cross-browser testing
- Semantic HTML
- Performance optimization
- Accessibility

### 6. Additional Resources
Curated collection of learning materials with icons and descriptions

## Design Features

### Visual Design
- **Color Scheme**: Purple-to-blue gradient theme
- **Typography**: System fonts for optimal performance
- **Spacing**: 8px grid system for consistent alignment
- **Shadows**: Subtle elevation effects for depth
- **Animations**: Smooth transitions and CSS animations

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: Below 768px (single column, optimized typography)

### Interactive Elements
- Hover effects on buttons and cards
- Smooth link transitions
- Color changes on interaction
- Scale and translate transforms

## Handlebars Features Used

```handlebars
<!-- Variables -->
{{title}}
{{currentDate}}

<!-- Unescaped HTML -->
{{{body}}}
```

## Vite Plugin Integration

The `compileTemplates()` plugin:
- Compiles Handlebars templates during build
- Provides virtual module for template compilation
- Transforms `index.html` with final compiled HTML
- Supports both development and production modes

## Build Output

### Development Build (npm run dev)
- HTML compiled in-memory
- CSS and JS served as ES modules
- Hot reload on file changes

### Production Build (npm run build)
```
dist/
├── index.html                           # Compiled HTML (7.85 kB)
├── assets/
│   ├── index-BslrvMzA.css             # Optimized CSS (7.16 kB)
│   └── index-BQwU8-Cd.js              # Bundled JS (222.68 kB)
```

## Performance Metrics

- HTML: 7.85 kB (gzip: 1.92 kB)
- CSS: 7.16 kB (gzip: 1.77 kB)
- JavaScript: 222.68 kB (gzip: 47.26 kB)
- Total Size: Highly optimized for production

## Customization

### Changing Data
Edit `src/main.js` to modify template data:
```javascript
const data = {
    title: 'Your Custom Title',
    currentDate: new Date().toLocaleDateString()
};
```

### Styling
All styles in `src/assets/css/style.css`:
- Modify colors, fonts, spacing
- Add new responsive breakpoints
- Update animations and transitions

### Adding Templates
1. Create new `.hbs` file in `src/templates/`
2. Register in `src/main.js`
3. Compile using Handlebars

## Dependencies

### Production
- **handlebars** (4.7.8): Templating engine for rendering content

### Development
- **vite** (5.4.2): Build tool and dev server

## Deployment

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy dist/ folder to Vercel
```

## Key Differences from Task 1

| Aspect | Traditional | Task 2 |
|--------|-----------|--------|
| **Build Tool** | Manual HTML | Vite bundler |
| **Templating** | N/A | Handlebars |
| **Development** | Static files | Hot reload server |
| **Organization** | Single file | Modular structure |
| **Compilation** | Runtime | Build-time optimization |

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Issues
```bash
rm -rf dist node_modules
npm install
npm run build
```

### Module Not Found
Ensure all imports use correct relative paths:
```javascript
import Handlebars from 'handlebars';
```

## Best Practices Implemented

1. **Separation of Concerns**
   - Templates separate from logic
   - CSS isolated in dedicated file
   - JavaScript modular

2. **Performance**
   - Minimal dependencies
   - Optimized CSS
   - Efficient bundling

3. **Maintainability**
   - Clear file structure
   - Consistent naming conventions
   - Proper documentation

4. **Scalability**
   - Template-based architecture
   - Easy to add new pages
   - Modular asset handling

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 12+, Android 8+)

## License

Educational project for internship training

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review template files in `src/templates/`
3. Verify `vite.config.js` configuration
4. Run `npm install` to ensure dependencies

## Next Steps

- Add more pages using the template system
- Integrate with a backend API
- Add form handling capabilities
- Implement search functionality
- Add dark mode toggle
- Expand component library

---

**Built with** Handlebars + Vite | **Task 2 Internship Project** | 2024
