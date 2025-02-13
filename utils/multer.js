import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

// Configure Cloudinary storage for different types of files
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    let folder;
    switch (file.fieldname) {
      case "videos":
        folder = "videos";
        break;
      case "RegCertificate":
        folder = "RegCertificate";
        break;
      case "agreementDoc":
        folder = "agreementDoc";
        break;
      case "images":
        folder = "images";
        break;
      default:
        folder = "misc";
    }
    return {
      folder: folder, // The folder in Cloudinary where files will be uploaded
      resource_type: "auto", // Automatically detect file type (video, image, etc.)
      public_id: `${Date.now()}-${file.originalname.split(".")[0]}`, // Custom file name
    };
  },
});

const configureMulter = () => {
  const upload = multer({
    storage,
    limits: {
      fileSize: 50 * 1024 * 1024, // 50 MB
    },
    fileFilter(req, file, cb) {
      const allowedFormats = {
        videos: ["video/mp4", "video/mpeg", "video/mp3"],
        RegCertificate: ["application/pdf"],
        agreementDoc: ["application/pdf"],
        images: ["image/jpeg", "image/png", "image/gif","image/jpg",]
        
      };

      if (
        allowedFormats[file.fieldname] &&
        allowedFormats[file.fieldname].includes(file.mimetype)
      ) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type"), false);
      }
    },
  }).fields([
    { name: "videos", maxCount: 5 },
    { name: "RegCertificate", maxCount: 5 },
    { name: "agreementDoc", maxCount: 5 },
    { name: "images", maxCount: 5 },
  ]);

  return upload;
};

export default configureMulter;
