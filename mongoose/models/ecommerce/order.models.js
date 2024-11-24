import mongoos, { mongo } from "mongoose";

//mini or child Schema
//which is only used in this orderSchema only
const orderItemSchema = new mongoos.Schema(
    {
        productId: {
           type: mongoos.Schema.Types.ObjectId,
           ref: "Product " 
        },
        quantity: {
            type: Number,
            required: true 
        }
    })

const orderSchema = new mongoos.Schema(
    {
        orderPrice: {
            type: Number,
            required: true, 
        },
        customer: {
            type: mongoos.Schema.Types.ObjectId,
            ref:  "User" 
        },
        orderItems: {
            type: [orderItemSchema ]
        },
        address: {
            type: String,
            req: true
        },
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENDING"
        }
    }, {tinmestamps: true})

export const Order = mongoos.model("Order", orderSchema)