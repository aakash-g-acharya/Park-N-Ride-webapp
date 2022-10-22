const { ParkSlot } = require("../models/parkingSlot")


const addSlot = async (req,res) => {
    try {
		const slot = await ParkSlot.find({allocValue:req.body.allocValue})
        console.log(Object.keys(slot).length)
		if (slot&&Object.keys(slot).length==4)
			return res
				.status(409)
				.send({ message: "Cant add slots of this value" });

        newSlot = {
            status:"vacant",
            ...req.body
        }

		await new ParkSlot(newSlot).save();
		res.status(201).send({ message: "Slot created successfully",value:req.body.allocValue });
	} catch (error) {
        console.log(req)
		res.status(500).send({ message: "Internal Server Error",error:error,value:req.body.allocValue });
	}
}

module.exports = { addSlot }