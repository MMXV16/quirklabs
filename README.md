# QuirkLabs Website

A modern, elegant, and responsive website for QuirkLabs software development company.

## Features

- **Modern Design**: Clean black and white color scheme with elegant typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Engaging animations using Framer Motion
- **Blog Section**: Integrated blog functionality
- **Contact Form**: Enhanced contact form with additional fields
- **Comprehensive Pages**: Home, About, Services, Portfolio, Blog, Contact, and Personal Info pages

## Tech Stack

### Frontend
- **React.js**: For the structure and components
- **Tailwind CSS**: For styling
- **Framer Motion**: For smooth, modern animations
- **Radix UI**: For elegant and reusable components

### Backend (Placeholders)
- **Node.js + Express**: For API structure
- **Firebase**: For hosting or authentication setup

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quirklabs.git
cd quirklabs
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
quirklabs/
├── docs/                  # Deployment documentation
├── public/                # Public assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable components
│   │   ├── layout/        # Layout components (Navbar, Footer, etc.)
│   │   └── ui/            # UI components (Button, Card, etc.)
│   ├── context/           # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   └── styles/            # CSS styles
├── .gitignore
├── index.html
├── package.json
├── README.md
└── tailwind.config.js
```

## Available Scripts

- `pnpm run dev`: Starts the development server
- `pnpm run build`: Builds the app for production
- `pnpm run preview`: Locally preview the production build

## Deployment

For detailed deployment instructions, please refer to the documentation:

- [Ubuntu VPS Deployment Guide](./docs/ubuntu-vps-deployment.md)
- [Vercel Deployment Guide](./docs/vercel-deployment.md)

## Customization

### Changing Colors

The color scheme can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#000000',  // Change this for primary color
      secondary: '#FFFFFF',  // Change this for secondary color
    },
  },
},
```

### Adding New Pages

1. Create a new page component in the `src/pages` directory
2. Add the route in `src/App.jsx`:

```jsx
<Route path="new-page" element={<NewPage />} />
```

3. Add a link in the navigation menu in `src/components/layout/Navbar.jsx`

## Browser Support

The website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
