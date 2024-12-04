import mongoose, { Document, Schema, Model } from 'mongoose';

interface Post extends Document {
  OwnerId: mongoose.Types.ObjectId;
  Title: string;
  Content: string;
}

const postSchema: Schema<Post> = new mongoose.Schema(
  {
    OwnerId: {
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

const Posts: Model<Post> =
  mongoose.models.Posts || mongoose.model<Post>('Posts', postSchema);

export default Posts;
