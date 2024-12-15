import mongoose, {Schema} from "mongoose"; // here i have imported and destructured schema so i can directly use it.
import bcrypt from "bcrypt"
import { JsonWebTokenError } from "jsonwebtoken";

// const userSchema = new mongoose.Schema({}) // normal convention 

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, //cloudnary
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim: true,
            index: true
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, "Paswored is required"]
        },
        refreshToken: {
            type: String,

        }
    }, {timestamps: true}) 

userSchema.pre("save", async function (next) {
    //if not modified then redirect this to next, negaive checking
    if (!this.isModified("password")) return next();

    //if password modiffied then chage it pr hash it again
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return JsonWebTokenError.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return JsonWebTokenError.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)