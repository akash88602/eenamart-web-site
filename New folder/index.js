import express from "express";
import multer from "multer";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "your_database_name",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/products-create", upload.single("photo_featured"), (req, res) => {
  const data = req.body;
  const photo = req.file ? req.file.filename : null;

  const sql = `INSERT INTO products (name, price, category_id, photo_featured)
               VALUES (?, ?, ?, ?)`;

  connection.query(sql, [data.name, data.price, data.category_id, photo], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Product added successfully", result });
  });
});

app.listen(4400, () => console.log("Server running on http://localhost:4400"));