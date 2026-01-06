import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      // We keep these external so the browser continues to use the importmap in production.
      // This ensures the production build remains extremely lightweight.
      external: [
        'react',
        'react-dom',
        'framer-motion',
        'lucide-react',
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@vercel/speed-insights/react',
        '@vercel/analytics/react'
      ]
    }
  }
});