# Menggunakan base image Node.js
FROM node:22

# Set working directory
WORKDIR /app


COPY package*.json ./
RUN npm install

# PAKSA install lightningcss versi gnu (karena kita pakai Debian)
RUN npm install lightningcss-linux-x64-gnu

# Menyalin seluruh direktori proyek ke dalam container
COPY . .


# COPY .env .

# Generate Prisma Client
# RUN npx prisma generate

# Build aplikasi Next.js
RUN rm -rf .next
RUN npm run build

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Expose port 3000
EXPOSE 3000