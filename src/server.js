const express = require('express');
const path = require('path');
const cors = require("cors");
const morgan = require("morgan");

// 2. Inisialisasi aplikasi Express
const app = express();
let PORT = process.env.PORT || 3001;

// 3. Middleware untuk parsing body JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan("dev"));
app.use(cors());









/* Router Import */
const {connectToDatabase} = require("./models/index")
const userRouter = require("./routers/user.router");

/* Connect to Database & Server Listen */
connectToDatabase()
  .then(() => {
    app.use(`/api/v1/users`, userRouter);
    /* Error Handling */
    app.use((req, res) => {
      res.status(404).send('404 - Halaman tidak ditemukan');
    });
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('500 - Terjadi kesalahan server');
    });

    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Koneksi database gagal:", error);
  }
);