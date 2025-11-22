import mongoose from "mongoose";

const roleRequestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    requestedRole: {
        type: String,   
        required: true
    },
    status: {
        type: String,
        default: "pending" 
    }
});

export default mongoose.model("RoleRequest", roleRequestSchema);
