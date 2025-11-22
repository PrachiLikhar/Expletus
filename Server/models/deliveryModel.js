import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const DeliveryBoy = mongoose.model("DeliveryBoy", deliverySchema);

export default DeliveryBoy;
