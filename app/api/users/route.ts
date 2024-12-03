import dbConnect from '@/lib/dbConnect';
import Users from '@/models/Users';
import { NextResponse } from 'next/server';

// GET all users
export async function GET() {
  await dbConnect();
  try {
    const users = await Users.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
