import Link from 'next/link';
import React from 'react';

const Navarbar = () => {
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
            <Link href="/signin">Sign In</Link>
          </li>
          <li>
            <Link href="/posts/create"></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navarbar;
