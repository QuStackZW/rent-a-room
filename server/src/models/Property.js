import mongoose from "mongoose";

const Schema = mongoose.Schema;

const propertySchema = new Schema({
    location: { type: String, required: false },
    streetAddress: { type: String, required: true },
    suburb: { type: String, required: true },
    image: { type: String, required: true },
    city: { type: String, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    // tenant: { type: mongoose.Types.ObjectId, ref: "Tenant", required: false },
    homeOwner: { type: mongoose.Types.ObjectId, ref: "HomeOwner", required: false },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Property", propertySchema);