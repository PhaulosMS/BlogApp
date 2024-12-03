import dbConnect from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import Users from '@/models/Users';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '@/lib/generateToken';
import { SignupData } from '@/types/types';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { Username, Password } = (await req.json()) as SignupData;
    const user = await Users.findOne({ Username });

    if (!user || !(await bcrypt.compare(Password, user.Password))) {
      return NextResponse.json(
        { error: 'Invalid Username or Password' },
        { status: 400 }
      );
    }

    const { token, cookieSettings } = generateTokenAndSetCookie(
      user._id.toString()
    );

    const response = NextResponse.json(
      {
        message: 'Login successful',
        user: {
          _id: user._id,
          Username: user.Username,
          Email: user.Email,
        },
      },
      { status: 200 }
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
