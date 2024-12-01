import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
  Username: string;
  Password: string;
  Email: string;
}

const userSchema: Schema = new mongoose.Schema({
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

const Users =
  mongoose.models.Users || mongoose.model<User>('Users', userSchema);

export default Users;
