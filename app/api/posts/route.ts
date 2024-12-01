import { PostData } from '@/app/types/types';
import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { Title, Content } = (await req.json()) as PostData;

    await Posts.create({ Title, Content });
    return NextResponse.json(
      { message: 'Post created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error, ${error}` },
      { status: 500 }
    );
  }
}
