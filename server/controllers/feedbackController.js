const {Feedbacks} = require("../models/feedback")

const viewFeedback = async (req,res) => {
    try {
		const reviews = await Feedbacks.find({});
	
        
		res.status(201).send({ message: "Feedback sent",reviews });
	} catch (error) {
        console.log(req.body)
		res.status(500).send({ message: "Internal Server Error",error:error });
	}
}


const addFeedback = async (req,res) => {
    try {
		
        await new Feedbacks({ ...req.body}).save();        

		res.status(200).send({ message: "Feedback submitted" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error",error:error });
	}
}


module.exports = { addFeedback , viewFeedback }