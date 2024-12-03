import { PostData } from '@/app/types/types';
import React from 'react';

const Post = ({ OwnerId, Title, Content, createdAt, updatedAt }: PostData) => {
  const isEdited = createdAt !== updatedAt;
  return (
    <div className="bg-red-600">
      <h1 className="text-3xl text-bold text-center">{Title}</h1>
      <p>{Content}</p>

      <div className="flex justify-between">
        <div>Author: {OwnerId}</div>
        <div>{!isEdited ? createdAt : updatedAt}</div>
      </div>
    </div>
  );
};

export default Post;
