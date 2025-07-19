# Migration Guide: Replit to Bolt

## Overview
This project is ready for migration to Bolt with minimal changes. It's a React + TypeScript frontend with Express backend, using standard web technologies.

## Files to Remove for Bolt
1. `.replit` - Replit configuration file
2. `replit.md` - Project documentation (optional to keep)
3. Remove from package.json devDependencies:
   - `@replit/vite-plugin-cartographer`
   - `@replit/vite-plugin-runtime-error-modal`

## Files to Modify

### 1. package.json
Remove these devDependencies:
```json
"@replit/vite-plugin-cartographer": "^0.2.7",
"@replit/vite-plugin-runtime-error-modal": "^0.0.3",
```

### 2. vite.config.ts
Replace with this clean version:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
```

## What Will Work in Bolt ✅
- React 18 + TypeScript setup
- Tailwind CSS + shadcn/ui components
- All UI components and interactions
- Express server with API routes
- File structure and path aliases
- All animations and visual effects
- Responsive design
- Project data and content

## Potential Issues ⚠️
1. **Database**: Currently configured for Neon PostgreSQL but uses in-memory storage
   - Should work fine as static data is used
   - May need different database setup if you want persistence

2. **Environment Variables**: 
   - Remove any Replit-specific env vars
   - The app works without database connection

3. **Node.js Version**:
   - Ensure Bolt supports Node 18+ for ES modules
   - Uses `import.meta.dirname` which needs Node 20.11+

## How to Run in Bolt
1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. `npm run build` - Build for production
4. `npm run start` - Run production server

## Architecture Summary
- **Frontend**: React SPA with client-side routing (Wouter)
- **Backend**: Express.js API server
- **Styling**: Tailwind CSS with custom design system
- **Data**: Static project data (no database required)
- **Build**: Vite for frontend, esbuild for backend

The project is essentially a sophisticated marketing/showcase website with interactive elements, perfect for Bolt's capabilities.