import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true,"Please enter a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Please enter a password"],
        minlength: [8,"Password must be at least 8 characters long"]
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }


})

const User = mongoose.models.users || mongoose.model 
("Users", userSchema);

export default User;