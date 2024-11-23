import mongoose, { mongo, Schema } from "mongoose";
import { User } from "./user.models";

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: String,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        //Array of sub-Todos
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo "
            }
        ]
    }, {timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema) 