const router = require("express").Router();

const { addFeedback , viewFeedback } = require("../controllers/feedbackController");

router.post("/addFeedback", addFeedback);

router.get("/viewFeedback", viewFeedback);

module.exports = router;