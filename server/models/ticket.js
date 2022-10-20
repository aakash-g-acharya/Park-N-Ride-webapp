import { Schema, model } from "mongoose";
import {userSchema} from "./user";

const ticketSchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema'
    },
	vehicleNo: { 
        type: String, 
        required: true 
    },
    slotID: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
	inTime: {
        type: Date,
        required: true
    },
    outTime: {
        type: Date,
        required: true
    },
    paymentStatus: {
        type: Boolean,
        required: true
    },
    paymentCharge: {
        type: Number,
        required: true,
        default: 0
    }

});

const Ticket = new model("ticket", ticketSchema);

export default { Ticket,ticketSchema };

