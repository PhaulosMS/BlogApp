'use client';
import { logoutUser } from '@/services';
import { useIsLoggedInStore } from '@/stores/loggedInStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navarbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedInStore();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await logoutUser();
      if (response.ok) {
        setIsLoggedIn(false);
        router.push('/');
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <nav>
        <ul className="flex gap-4 font-bold text-2xl ml-auto justify-end">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/user/profile">Profile</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link href="/create">Create Post</Link>
            ) : (
              <span className="text-gray-500 cursor-not-allowed">
                Create Post
              </span>
            )}
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={handleSignOut}>Sign Out</button>
            ) : (
              <Link href="/login">Sign In</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navarbar;
