const mongoose = require("mongoose");
const { Ticket,ticketSchema } = require("../models/ticket");

const userRequestSchema = new mongoose.Schema({
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

const UserRequest = new mongoose.model("userRequest", userRequestSchema);

module.exports =  UserRequest ;

