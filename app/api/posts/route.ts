import { PostData } from '@/types/types';
import dbConnect from '@/lib/dbConnect';
import Posts from '@/models/Posts';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { OwnerId, Title, Content } = (await req.json()) as PostData;

    await Posts.create({ OwnerId, Title, Content });
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

export async function GET() {
  await dbConnect();
  try {
    const posts = await Posts.find({}).sort({ createdAt: -1 }).limit(10);
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
