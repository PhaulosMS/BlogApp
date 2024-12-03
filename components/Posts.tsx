import React from 'react';
import { getAllPosts } from './services';
import { PostData } from '@/app/types/types';
import Post from './Post';

const Posts = async () => {
  const posts: PostData[] = await (await getAllPosts()).json();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post: PostData, idx: number) => (
        <Post
          key={idx}
          OwnerId={post.OwnerId}
          Title={post.Title}
          Content={post.Content}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
        />
      ))}
    </div>
  );
};
export default Posts;
