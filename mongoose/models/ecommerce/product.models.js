import mongoose from "mongoose";
import { Category } from "./category.models";

const productSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        productImage: {
            type: Struing // we upload images videos into AWS S3 buckets nd Cloudnary their sdk gives us the link of that image so we use this image as type: String. Uploading images, videos into data base makes them, slow nd we retrive data from DB as buffers and other complex things so we put images into S3 and Cloudnary.
        },
        price: {
            type: Number,
            default: 0
        },
        stock: {
            type: Number,
            default: 0
        },
        category:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true  
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, {timestyamps: true})

export const Product = mongoose.model("Product", productSchema)