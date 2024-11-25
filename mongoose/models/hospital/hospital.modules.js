import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requireed: true
        },
        address: {
            type: String,
            requireed: true
        },
        city: {
            type: String,
            requireed: true
        },
        pinCode: {
            type: String,
            requireed: true
        },
        specalizedIn: [
            {
                type: String,
                required: true 
            }
        ]
    }, {timestamps: true})

export const Hospital = mongoose.model("Hospital", hospitalSchema) 