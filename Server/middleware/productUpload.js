import multer from "multer";
import path from "path";
import fs from "fs";

const productFolder = path.join(process.cwd(), "uploads/products");

if (!fs.existsSync(productFolder)) {
  fs.mkdirSync(productFolder, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, productFolder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const productUpload = multer({ storage });

export default productUpload;
