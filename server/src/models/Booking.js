import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    movingInDate: { type: Date, required: true },
    movingOutDate: { type: Date, required: true },
    property: { type: mongoose.Types.ObjectId, ref: "Property", required: true },
    renter: { type: mongoose.Types.ObjectId, ref: "Renter", required: true },
    homeOwner: { type: mongoose.Types.ObjectId, ref: "HomeOwner", required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
