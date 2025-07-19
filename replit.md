# Viction Retrodrop Ideabook — Website Requirements Document

## Overview

This project is a single-page website showcasing a visionary ideabook for Viction's Retrodrop Season 2. The site presents 11 innovative project concepts that transform Retrodrop token allocations into ecosystem-defining experiences. Built as an immersive scroll-based storytelling platform, it demonstrates how each grant recipient could create meaningful, Viction-native experiences that enhance interoperability, cultural depth, and real utility across the blockchain ecosystem.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Design System**: Custom design system with Viction brand colors and glassmorphism effects

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite middleware
- **Static Serving**: Serves client build in production

## Key Components

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend server
- `shared/` - Shared TypeScript schemas and types
- `attached_assets/` - Project requirements and ideabook content

### Core Frontend Components
- **Navigation**: Sticky navigation with smooth scroll and active section tracking
- **Hero Section**: Full-screen landing with animated elements and gradient text
- **About Section**: Explains the Retrodrop concept and project vision
- **Projects Section**: Interactive cards showcasing all 11 projects with modals
- **Ecosystem Section**: Visual representation of project interconnections
- **Creator Section**: About the creator and vision statement
- **Footer**: Links, resources, and contact information

### UI System
- **Design Language**: Dark theme with purple/blue gradients matching Viction branding
- **Animations**: CSS-based animations including floating elements, scroll triggers, and glassmorphism effects
- **Typography**: Space Grotesk and Inter fonts for modern, clean aesthetic
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

## Data Flow

### Project Data Management
- Static project data stored in `client/src/data/projects.ts`
- Type-safe project schema with categories: Core Project, Core Community, Core Contributor
- Each project includes allocation amounts, features, ecosystem touchpoints, and impact descriptions

### Component Communication
- Props-based data flow from parent to child components
- Modal state management for project detail views
- Smooth scroll navigation using native browser APIs

### Content Organization
- 11 projects categorized by type and rendered in separate sections
- Dynamic project cards with expandable modal details
- Ecosystem interconnection visualization showing project relationships

## External Dependencies

### Core Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **@tanstack/react-query**: Server state management and caching
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight client-side routing
- **class-variance-authority**: Utility for creating consistent component variants
- **clsx**: Conditional className utility

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for server
- **esbuild**: Fast JavaScript bundler for production builds

### Database & ORM (Configured but Not Used)
- **drizzle-orm**: Type-safe ORM (ready for future database integration)
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- Database schema defined but using in-memory storage currently

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` - Runs Vite dev server with HMR and Express backend
2. **Production Build**: `npm run build` - Creates optimized client build and bundles server
3. **Production Start**: `npm run start` - Serves static files and API from single Express server

### File Structure
- Client builds to `dist/public/` for static serving
- Server bundles to `dist/index.js` for production deployment
- Assets served from Express static middleware in production

### Environment Configuration
- Development uses Vite middleware for client serving
- Production serves pre-built static files
- Database URL configured via environment variables (DATABASE_URL)
- Replit-specific development tools integrated

### Hosting Considerations
- Single-page application with client-side routing
- Express server handles both API routes (prefixed `/api`) and static file serving
- Designed for platforms like Replit, Vercel, or similar Node.js hosting
- No database required for current functionality (content is static)

The architecture prioritizes performance, developer experience, and visual impact while maintaining the flexibility to add dynamic features like user authentication, content management, or database integration in the future.