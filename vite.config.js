// Importing Vite's defineConfig helper and the React plugin
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the configuration
export default defineConfig({
  plugins: [react()], // Using the React plugin
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] // Specifying file extensions
  }
});
