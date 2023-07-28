import mongoose, { Schema } from 'mongoose';

const videoSchema = new Schema(
  {
    title: { type: String, required: true },
    urlThumbnail: { type: String, required: true },
  },
  { timestamps: true }
);

export default videoSchema;
