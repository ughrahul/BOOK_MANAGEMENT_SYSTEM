const express = require("express");
const router = express.Router();

const bookRouter = require("../modules/book.route");

router.get("/", (req, res, next) => {
  try {
    console.log({ body: req.body });
    res.json({ msg: "Hello From Route Index" });
  } catch (e) {
    next(e);
  }
});

router.use("/", bookRouter);

module.exports = router;
