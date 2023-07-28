import mongoose from 'mongoose';
import videoSchema from './schema.js';

const videoModel = mongoose.model('video', videoSchema);

export default videoModel;
