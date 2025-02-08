const express = require("express");
const { mail } = require("../controller/mail");
const { check } = require("express-validator");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post(
  "/mail",
  [
    check("from", "Email Id must be valid").isEmail(),
    check("body", "Body of the mail must be present").isLength({ min: 1 }),
    check("name", "Name must be present").isLength({ min: 3 }),
    check("subject", "Subject must be present").isLength({ min: 1 }),
  ],
  mail
);

router.get("/download", (req, res) => {
  const root = process.cwd();
  console.log(root);
  const url = path.join(root, process.env.resume);
  console.log(url);
  const check = fs.existsSync(url);
  if (!check) {
    return res.status(500).send({ success: "false", msg: "Resume is not Found" });
  }
  // Set headers to force download
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${path.basename(url)}`
  );
  res.setHeader("Content-Type", "application/octet-stream");
  res.download(url, (err) => {
    if (err) {
      if (!res.headersSent) {
        return res.status(500).send({ success: "false", msg: "Server Error Occured" });
      }
    }
  });
});

module.exports = router;
