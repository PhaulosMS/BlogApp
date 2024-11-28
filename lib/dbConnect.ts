import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    console.log('Already connected to the database.');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!, {});
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Database connection failed');
  }
};

export default dbConnect;
