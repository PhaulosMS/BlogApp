import mongoose, { Document, Schema } from 'mongoose';

interface Post extends Document {
  Title: string;
  Content: string;
}

const postSchema: Schema = new mongoose.Schema(
  {
    OnwerId: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Posts =
  mongoose.models.Posts || mongoose.model<Post>('Posts', postSchema);

export default Posts;
