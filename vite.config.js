import { resolve } from 'path'
import { defineConfig } from 'vite'
import { readdirSync } from 'fs'

// Read all HTML files dynamically
const files = readdirSync(__dirname).filter(file => file.endsWith('.html'));
const inputMap = {};
files.forEach(file => {
  const name = file.replace('.html', '');
  inputMap[name] = resolve(__dirname, file);
});

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputMap,
    },
  },
})
