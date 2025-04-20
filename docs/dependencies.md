# QuirkLabs Website Dependencies

This document outlines all the dependencies required to run the QuirkLabs website project.

## System Requirements

- **Node.js**: v16.0.0 or higher
- **pnpm**: v7.0.0 or higher (preferred package manager)
- **npm**: v8.0.0 or higher (alternative to pnpm)

## Core Dependencies

| Dependency | Version | Description |
|------------|---------|-------------|
| React | ^18.2.0 | JavaScript library for building user interfaces |
| React DOM | ^18.2.0 | React package for working with the DOM |
| React Router DOM | ^6.22.3 | Routing library for React |
| Framer Motion | ^12.7.4 | Animation library for React |
| Tailwind CSS | ^3.4.1 | Utility-first CSS framework |
| PostCSS | ^8.4.35 | Tool for transforming CSS with JavaScript |
| Autoprefixer | ^10.4.19 | PostCSS plugin to parse CSS and add vendor prefixes |

## Radix UI Components

| Dependency | Version | Description |
|------------|---------|-------------|
| @radix-ui/react-navigation-menu | ^1.1.4 | Accessible navigation menu component |
| @radix-ui/react-dropdown-menu | ^2.0.6 | Accessible dropdown menu component |
| @radix-ui/react-dialog | ^1.0.5 | Accessible dialog component |
| @radix-ui/react-form | ^0.1.4 | Accessible form component |
| @radix-ui/react-toggle-group | ^1.0.4 | Accessible toggle group component |
| @radix-ui/react-switch | ^1.0.3 | Accessible switch component |
| @radix-ui/react-toast | ^1.1.5 | Accessible toast component |

## Development Dependencies

| Dependency | Version | Description |
|------------|---------|-------------|
| TypeScript | ^5.4.2 | Typed JavaScript at any scale |
| Vite | ^6.3.2 | Next generation frontend tooling |
| ESLint | ^8.57.0 | Pluggable JavaScript linter |
| @types/react | ^18.2.66 | TypeScript definitions for React |
| @types/react-dom | ^18.2.22 | TypeScript definitions for React DOM |
| @typescript-eslint/eslint-plugin | ^7.2.0 | TypeScript-specific linting rules |
| @typescript-eslint/parser | ^7.2.0 | Parser for TypeScript-specific linting |
| @vitejs/plugin-react | ^4.2.1 | Vite plugin for React |

## Installation Instructions

### Using pnpm (Recommended)

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install dependencies
cd quirklabs
pnpm install
```

### Using npm

```bash
# Install dependencies
cd quirklabs
npm install
```

## Running the Project

### Development Mode

```bash
# Using pnpm
pnpm run dev

# Using npm
npm run dev
```

### Production Build

```bash
# Using pnpm
pnpm run build

# Using npm
npm run build
```

### Preview Production Build

```bash
# Using pnpm
pnpm run preview

# Using npm
npm run preview
```

## Deployment Dependencies

For deploying to an Ubuntu VPS, you'll also need:

- Nginx
- Certbot (for SSL)
- Git

For deploying to Vercel, you'll need:

- A Vercel account
- Git
- Vercel CLI (optional)

Refer to the deployment documentation for detailed instructions:
- [Ubuntu VPS Deployment Guide](./ubuntu-vps-deployment.md)
- [Vercel Deployment Guide](./vercel-deployment.md)
