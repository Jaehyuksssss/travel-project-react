const express = require("express");
const router = express.Router();
const multer = require("multer");

//=================================
//             product
//=================================

/*destination = 어디에 파일이 저장이 되는지*/

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/image", (res, res) => {
  //가져온 이미지를 저장을 해주면 될듯.
  upload(req, res, (err) => {
    if (err) {
      return req.json({
        success: false,
        err,
      });
    }
    return res.json({
      success: true,
      filepath: res.req.file.path,
      filename: res.req.file.filename,
    });
  });
});

module.exports = router;
