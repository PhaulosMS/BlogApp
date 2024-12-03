import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    );
    response.cookies.delete('token');
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error, ${error}` },
      { status: 500 }
    );
  }
}
