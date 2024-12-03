import mongoose, { Document, Schema, Model } from 'mongoose';

interface User extends Document {
  _id: mongoose.Types.ObjectId;
  Username: string;
  Password: string;
  Email: string;
}

const userSchema: Schema<User> = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Users: Model<User> =
  mongoose.models.Users || mongoose.model<User>('Users', userSchema);

export default Users;
