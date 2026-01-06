import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // We keep these external so the browser uses the importmap in index.html
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