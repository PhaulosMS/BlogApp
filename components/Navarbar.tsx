'use client';
import { useloggedInStore } from '@/app/stores/loggedInStore';
import Link from 'next/link';
import React from 'react';

const Navarbar = () => {
  const { isLoggedin } = useloggedInStore();
  return (
    <div>
      <nav>
        <ul className="flex gap-4 font-bold text-2xl ml-auto justify-end">
          <Link href="/">Home</Link>
          <Link href="/user/profile">Profile</Link>
          {isLoggedin ? (
            <Link href="/create">Create Post</Link>
          ) : (
            <span className="text-gray-500 cursor-not-allowed">
              Create Post
            </span>
          )}
          <Link href="/login">Sign In</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navarbar;
