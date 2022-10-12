import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    // github项目名称 build path base:'/mangosteen/',
  plugins: [vue()]
})
