const express = require("express");
const router = express.Router();
const app = express();
router.use("/contacts", require("./contacts"));

module.exports = router;
