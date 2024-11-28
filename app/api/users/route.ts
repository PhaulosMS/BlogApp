import dbConnect from '@/lib/dbConnect';
import Users from '@/models/Users';
import { NextResponse } from 'next/server';

type UserInfo = {
  Username: string;
  Password: string;
  Email: string;
};

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { Username, Password, Email } = (await req.json()) as UserInfo;
    await Users.create({ Username, Password, Email });
    return NextResponse.json(
      { message: 'Account created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
