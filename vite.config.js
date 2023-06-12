import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Project1/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

 // Chặn các trường hợp không mong muốn
//  if (
//   (this.displayedNumber === 'Error') || // Không cho phép nhập nếu đã có lỗi
//   ((this.isLastInputOperator || this.displayedNumber === '') && (value === ')')) || // Không cho phép nhập ')' nếu không có dấu mở ngoặc trước đó
//   (this.isLastInputOperator && (value === '-')) || // Không cho phép nhập '-' nếu là dấu tiếp theo sau dấu toán tử
//   (this.displayedNumber === '' && (value === '*' || value === '/' || value === '=' || value === ')' || value === '.' || value === '+')) || // Không cho phép nhập các dấu toán tử hoặc '.' nếu là ký tự đầu tiên hoặc không có giá trị hiển thị trước đó
//   (this.displayedNumber.includes('=') && value !== 'AC') // Không cho phép nhập nếu đã hiển thị kết quả và giá trị không phải là 'AC'
// ) {
//   return;
// }