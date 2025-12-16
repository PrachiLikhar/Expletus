import multer from "multer";
import path from "path";
import fs from "fs";

const sellerFolder = path.join(process.cwd(), "uploads/sellers");

if (!fs.existsSync(sellerFolder)) {
  fs.mkdirSync(sellerFolder, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, sellerFolder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.fieldname + path.extname(file.originalname));
  },
});

const sellerUpload = multer({ storage });

export default sellerUpload;
