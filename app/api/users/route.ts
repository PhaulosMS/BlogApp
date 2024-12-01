import { UserData } from '@/app/types/types';
import dbConnect from '@/lib/dbConnect';
import Users from '@/models/Users';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '@/lib/generateToken';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { Username, Password, Email, ConfirmPassword } =
      (await req.json()) as UserData;

    // check if username exists in the database
    if (await Users.findOne({ Username })) {
      return NextResponse.json(
        {
          error: 'Username already exists',
        },
        { status: 400 }
      );
    }

    // check if password and ConfirmPassword match
    if (Password !== ConfirmPassword) {
      return NextResponse.json(
        {
          error: 'Passwords do not match',
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = await Users.create({
      Username,
      Password: hashedPassword,
      Email,
    });

    // generate token and set cookie
    const { token, cookieSettings } = generateTokenAndSetCookie(
      newUser._id.toString()
    );

    const response = NextResponse.json(
      { message: 'Account created successfully' },
      { status: 201 }
    );

    response.cookies.set('token', token, cookieSettings);

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error, ${error}` },
      { status: 500 }
    );
  }
}

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
