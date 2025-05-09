import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    }
});

const User = mongoose.model('User',UserSchema);
export default User;