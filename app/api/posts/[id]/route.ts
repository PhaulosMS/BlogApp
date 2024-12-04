import Posts from '@/models/Posts';
import dbConnect from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const newParams = await params;
  try {
    const post = await Posts.find({ OwnerId: newParams.id });
    if (!post) {
      return NextResponse.json({ error: 'Posts not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error: ' + error },
      { status: 500 }
    );
  }
}
