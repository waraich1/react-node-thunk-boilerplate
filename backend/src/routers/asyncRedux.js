const express = require("express");
const router = new express.Router();
router.get("/asyncRedux", async (req, res) => {
  try {
    const dataToBeSend = {
        data: "Asynchronus calls are working now"
    };
    res.status(201).send(dataToBeSend);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;