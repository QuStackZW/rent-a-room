import mongoose from "mongoose";

const Schema = mongoose.Schema;

const propertySchema = new Schema({
    location: { type: String, required: false },
    streetAddress: { type: String, required: true },
    suburb: { type: String, required: true },
    city: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    tenant: { type: mongoose.Types.ObjectId, ref: "Tenant", required: false },
    homeOwner: { type: mongoose.Types.ObjectId, ref: "HomeOwner", required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Property", propertySchema);