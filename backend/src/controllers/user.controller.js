import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudianry.js "
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
    //get user detail from frontend
    // validation - not empty 
    // check if user already exists: email, username
    // upload them to cloudinary: avatar
    // create user object - create entry in db
    // remove pass & refresh token field from response
    // check for user creation
    // return res

    const {fullName, email, userName, password} = req.body
    console.log("email:", email);

//Normal method
    // if (fullname = "") {
    //     throw new ApiError(400, "fullname is required!")
    // }
    // we can perform the checking everything single single.

     if (
        [fullName, email, userName, password].some((field) =>  field?.trim() == "")
    ) {
        throw new ApiError(400, "All fields required")
    }
    
    const existedUser = User.findOne({
        $or:[{ userName }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with Email or UserName already exists! ")
    }


    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0].path
//Avatar
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required!")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar) {
        throw new ApiError(400, "Avatar file is required!")
    }

    const user =  await User.create({
        fullName,
        avatar: avatar.URL,
        coverImage: coverImage?.URL || "",
        email,
        password,
        userName: userName.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registreing a user ")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "userRegsitered Succesfully")
    )

})

export {
    registerUser, 
}
