const router = require("express").Router();
const bookController = require("./book.controller");

router.get("/books", (req, res, next) => {
  try {
    res.json({ msg: "Hello from Book Route" });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    data.time = Math.floor(data.words / 238);
    console.log({ data });
    const result = await bookController.create(data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
