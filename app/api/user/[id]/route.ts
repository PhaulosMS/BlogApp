// GET user by ID

import dbConnect from '@/lib/dbConnect';
import Users from '@/models/Users';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const user = await Users.findById(params.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error: ' + error },
      { status: 500 }
    );
  }
}
