import { getUserById } from '@/services';
import { PostData } from '@/types/types';
import React from 'react';

const Post = ({ OwnerId, Title, Content, createdAt, updatedAt }: PostData) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);

    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes} ${day}/${month}/${year}`;
  };
  const isEdited = createdAt !== updatedAt;

  const getUsername = async (id: string) => {
    const response = await (await getUserById(id)).json();
    return response.Username || 'DELETED USER';
  };

  return (
    <div className="bg-red-600 p-2 pb-0">
      <h1 className="text-3xl text-bold text-center">{Title}</h1>
      <p className="text-center">{Content}</p>

      <div className="flex justify-between">
        <div>Author: {getUsername(OwnerId)}</div>
        <div>{!isEdited ? formatTime(createdAt) : formatTime(updatedAt)}</div>
      </div>
    </div>
  );
};

export default Post;
