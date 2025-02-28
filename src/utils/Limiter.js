const { rateLimit } = require("express-rate-limit");

const updateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 menit
  max: 5, // Maksimal 5 request dalam 10 menit
  message: { message: "Terlalu sering mengupdate data, coba lagi nanti." },
});

const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 menit
  max: 8, // Maksimum 8 request per 10 menit
  message: { message: "Terlalu banyak percobaan, coba lagi nanti" },
});

// Limiter umum (misalnya untuk transaksi)
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 menit
  max: 100, // Maksimum 100 request per menit
  message: { message: "Terlalu banyak request, coba lagi nanti" },
});

module.exports = { authLimiter, updateLimiter, apiLimiter };
