import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  attachments: [{
    type: String 
  }],
  status: {
    type: String,
    enum: ["open", "in-progress", "resolved", "closed"],
    default: "open"
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high", "urgent"],
    default: "low"
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    default: null
  },
  comments: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      message: String,
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ]
}, { timestamps: true });

export default mongoose.model("Ticket", ticketSchema);
