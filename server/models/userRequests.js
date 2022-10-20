import { Schema, model } from "mongoose";
import {ticketSchema} from "./ticket";

const userRequestSchema = new Schema({
    ticketID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ticketSchema'
    },
    carWashStatus: {
        type: Number,
        enum: [0,1,2],
        default: 0
    },
    fuelStatus: {
        type: Number,
        enum: [0,1,2],
        default: 0
    },
    TyreworkStatus: {
        type: Number,
        enum: [0,1,2],
        default: 0
    }
});

const UserRequest = new model("userRequest", userRequestSchema);

export default { UserRequest };

