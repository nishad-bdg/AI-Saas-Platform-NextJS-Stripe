import { Schema, model, models } from "mongoose";

export interface Author {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface Images extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: Record<string, any>; // Using a more specific type for config if known
  transformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: Author;
  createdAt?: Date;
  updatedAt?: Date;
}

const ImagesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImagesSchema);

export default Image;
