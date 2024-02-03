const router = require("express").Router();
const bookController = require("./book.controller");
const apiVersion = "v1";

router.get(`/api/${apiVersion}`, (req, res, next) => {
  try {
    res.json({ msg: "Hello from Book Route" });
  } catch (e) {
    next(e);
  }
});

router.post(`/api/v1`, async (req, res, next) => {
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

router.put("/api/v1/:id", async (req, res, next) => {
  try {
    const data = req.body;
    const result = await bookController.updateByID(req.params.id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.patch("/api/v1/:id", async (req, res, next) => {
  try {
    const data = req.body;
    const result = await bookController.updateByID(req.params.id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.delete("/api/v1/:id", async (req, res, next) => {
  try {
    const result = await bookController.deleteByID(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
