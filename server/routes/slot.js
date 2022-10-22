const router = require("express").Router();

const { addSlot  } = require("../controllers/slotController");


router.post("/add", addSlot);


module.exports = router;