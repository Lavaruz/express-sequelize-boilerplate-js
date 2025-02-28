# Express Sequelize Boilerplate JS

## 📌 Overview

Express Sequelize Boilerplate JS adalah template siap pakai untuk membangun aplikasi backend dengan **Express.js** dan **Sequelize**. Repositori ini menyediakan struktur proyek yang terorganisir, konfigurasi database yang modular, serta fitur bawaan seperti autentikasi, middleware, dan error handling.

## 🚀 Features

- **Express.js** – Framework minimalis dan fleksibel untuk Node.js.
- **Sequelize ORM** – Abstraksi database untuk MySQL, PostgreSQL, SQLite, dan MSSQL.
- **Environment Variables** – Konfigurasi menggunakan `dotenv`.
- **Rate Limiter** – Batasan jumlah request untuk mencegah abuse.
- **JWT Authentication** – Implementasi autentikasi berbasis JSON Web Token.
- **MVC Pattern** – Struktur proyek yang terorganisir.
- **ESLint & Prettier** – Code linting dan formatting otomatis.
- **CommonJS Support** – Kompatibel dengan Node.js 13 dan versi lebih baru.

## 🏗️ Project Structure

```plaintext
project-root/
│── src/
│   ├── controllers/   # Logic untuk request handling
│   ├── models/        # Definisi model Sequelize
│   ├── routes/        # Routing aplikasi
│   ├── middlewares/   # Middleware seperti auth & error handling
│   ├── config/        # Konfigurasi database & environment
│   ├── utils/         # Helper functions
│   ├── app.js         # Inisialisasi Express
│── .env               # Environment variables
│── server.js          # Entry point aplikasi
│── package.json       # Dependencies & scripts
│── README.md          # Dokumentasi proyek
```

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```sh
git clone https://github.com/your-username/express-sequelize-boilerplate-js.git
cd express-sequelize-boilerplate-js
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Setup Environment Variables

Buat file `.env` dan isi dengan konfigurasi berikut:

```plaintext
PORT=3000
DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
DB_HOST=127.0.0.1
ACCESS_TOKEN_SECRET=your_secret_key
MAILER_EMAIL=your_email@gmail.com
MAILER_PASSWORD=your_email_password
```

### 4️⃣ Run Migrations & Seeders (Optional)

```sh
npx sequelize db:migrate
npx sequelize db:seed:all
```

### 5️⃣ Start Server

```sh
npm start
```

Server akan berjalan di `http://localhost:3000`.

## 📜 License

MIT License. Silakan gunakan dan modifikasi sesuai kebutuhan.

## 🙌 Contribution

Pull request dan issue selalu terbuka! Jangan ragu untuk berkontribusi. 🚀

