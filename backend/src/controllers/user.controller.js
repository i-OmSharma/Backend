import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
    //get user detail from frontend
    // validation
    //  heck if user already exists: email
    // upload them to cloudinary: avatar
    //create user object - create entry in db
    // remove pass & refresh token field from response
    // check for user creation
    // return res

    const {fullname, email, userName, password} = req.body
    console.log("email:", email);
    
})

export default registerUser
