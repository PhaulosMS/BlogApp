import { PostData } from '@/types/types';
import React from 'react';

const Post = ({ OwnerId, Title, Content, createdAt, updatedAt }: PostData) => {
  const isEdited = createdAt !== updatedAt;
  const Author = OwnerId; // eventually convert this to username
  return (
    <div className="bg-red-600 p-2 pb-0">
      <h1 className="text-3xl text-bold text-center">{Title}</h1>
      <p className="text-center">{Content}</p>

      <div className="flex justify-between">
        <div>Author: {Author}</div>
        <div>{!isEdited ? createdAt : updatedAt}</div>
      </div>
    </div>
  );
};

export default Post;
