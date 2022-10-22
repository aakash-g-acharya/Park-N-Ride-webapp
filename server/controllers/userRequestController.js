const {UserRequests} = require("../models/userRequests")

const viewUserRequest = async (req,res) => {
    try {
		

            const requestsList = await UserRequests.find({});

            res.status(200).send({ message: "List of requests sent" , data:requestsList});

	} catch (error) {
        console.log(req.body)
		res.status(500).send({ message: "Internal Server Error",error:error });
	}
}


const updateUserRequest = async (req,res) => {
    try {
		
        const requestToUpdate = await UserRequests.findOne({ticketID:req.body.id});

        console.log(requestToUpdate)
        requestToUpdate.status = true;

        await requestToUpdate.save();

		res.status(200).send({ message: "Request status updated" ,id:req.body.id});
	} catch (error) {
        console.log(req.body)
		res.status(500).send({ message: "Internal Server Error",error:error });
	}
}


module.exports = { updateUserRequest , viewUserRequest }