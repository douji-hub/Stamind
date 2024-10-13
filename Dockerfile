# 使用 Node.js 的官方 LTS 映像作為基礎
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 並安裝依賴項
COPY package.json package-lock.json ./

# 安裝依賴項
RUN npm install

# 複製應用程式的所有檔案
COPY . .

# 構建 Next.js 應用
RUN npm run build

# 暴露 Next.js 預設的 3000 端口
EXPOSE 3000

# 啟動應用
CMD ["npm", "start"]
