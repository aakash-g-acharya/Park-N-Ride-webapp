import { Schema, model } from "mongoose";

const parkSlotSchema = new Schema({
	status: { 
        type: String, 
        required: true 
    },
    id :{
        type: Number, 
        required: true,
        unique: true
    }
	
});

const ParkSlot = new model("parkSlot", parkSlotSchema);

export default { ParkSlot };

