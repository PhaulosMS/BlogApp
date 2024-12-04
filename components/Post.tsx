'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUsername } from '@/services';
import { PostData } from '@/types/types';

const Post = ({ OwnerId, Title, Content, createdAt, updatedAt }: PostData) => {
  const [isEdited, setIsEdited] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUsername = async () => {
      const name = await getUsername(OwnerId);
      setUsername(name);
    };
    setIsEdited(createdAt !== updatedAt);
    fetchUsername();
  }, [username]);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);

    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes} ${day}/${month}/${year}`;
  };

  return (
    <div className="bg-red-600 p-2 pb-0">
      <h1 className="text-3xl text-bold text-center">{Title}</h1>
      <p className="text-center">{Content}</p>

      <div className="flex justify-between">
        <div onClick={() => router.push(`/profile/${username}`)}>
          Author: {username}
        </div>
        <div>
          {isEdited && <div>Last updated: {formatTime(updatedAt)}</div>}
        </div>
        <div>Published: {formatTime(createdAt)}</div>
      </div>
    </div>
  );
};

export default Post;
