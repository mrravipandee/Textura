import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 40,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false, // Exclude password from queries by default
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    creditBalance: {
        type: Number,
        default: 5,
    },
});

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;