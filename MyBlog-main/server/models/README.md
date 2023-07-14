import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.pre('save', (next) => {
    now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
  
    next();
  });
