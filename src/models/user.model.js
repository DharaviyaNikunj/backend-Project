import mongoose, {Schema} from "mongoose";
<<<<<<< HEAD
=======
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { MongoGridFSChunkError } from "mongodb";

>>>>>>> 2127400 (first commit)

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
<<<<<<< HEAD
        fullname:{
=======
        fullName:{
>>>>>>> 2127400 (first commit)
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar :{
            type: String, //cloudinary url
            require: true
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory :[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            

        }],
        password :{
            type: String,
            required: [true,'Password is required']
        },
        refreshToken :{
            type: String
        }

    },{
        timestamps: true
    }
)

<<<<<<< HEAD

export const User = mongoose.model("User",userSchema)
=======
useSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10)
    next()
 })

userSchema.methods.isPasswordCorrect = async function(password){
    return  await bcrypt.compare(password, this.password)

}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User = mongoose.model("User",userSchema)
>>>>>>> 2127400 (first commit)
