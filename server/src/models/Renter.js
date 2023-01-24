import mongoose from "mongoose";

const Schema = mongoose.Schema;

const renterSchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    nationalId: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    properties: [
        { type: mongoose.Types.ObjectId, ref: "Property", required: true },
    ],
    password: { type: String, required: true, minlength: 8 },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Renter", renterSchema);
