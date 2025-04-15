import mongoose, { Schema, Document } from "mongoose";

interface IMessage {
  text: string;
  type: "freight" | "plastic" | "agric";
}

interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  messages: IMessage[];
}

const ContactSchema = new Schema<IContact>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    messages: [
      {
        text: { type: String, required: true },
        type: {
          type: String,
          enum: ["freight", "plastic", "agric"],
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

const Contact = mongoose.model<IContact>("Contact", ContactSchema);
export default Contact;
