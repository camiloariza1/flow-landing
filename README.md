# Flow Landing Page Code Summary

## Overview
This project is a landing page for Flow Mobility, a fintech company in Colombia specializing in transportation and mobility financial solutions. It is built using React, TypeScript, and Tailwind CSS.

## Key Components

### Configuration Files
- `.gitignore`: Specifies files to be ignored by Git
- `package.json`: Defines project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration

### React Components
- `App.tsx`: Main application component
- Various components in `src/components/`:
  - `Header.tsx`
  - `Hero.tsx`  
  - `Features.tsx`
  - `ProductShowcase.tsx`
  - `HowTo.tsx`
  - `CallToAction.tsx`
  - `Footer.tsx`

### Pages
- `Survey.tsx`: Survey page component
- `_app.tsx`: Next.js app wrapper

### Styles
- `index.css`: Global styles
- `globals.css`: Global styles for Next.js

### Hooks
- `useIntersectionObserver.tsx`: Custom hook for intersection observer functionality

## Key Features
- Responsive design using Tailwind CSS
- TypeScript for type safety
- Component-based architecture with React
- Custom color scheme defined in Tailwind config
- Intersection observer hook for scroll-based animations

## Build and Development
- Uses React Scripts for development and building
- Configured for TypeScript compilation
- Tailwind CSS for styling

## Usage
To run the development server:
```
yarn start
```

To build for production:
```
yarn build
```

This landing page is designed to showcase Flow Mobility's services and provide an interactive experience for potential customers in the transportation and mobility financial solutions space.