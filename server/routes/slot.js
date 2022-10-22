const router = require("express").Router();

const { addSlot , changeFault } = require("../controllers/slotController");


router.post("/add", addSlot);

router.post("/changeFault", changeFault);


module.exports = router;