import Image from 'next/image';
import Navarbar from '@/components/Navarbar';
import RegisterForm from '@/components/RegisterForm';
import Post from '@/components/Post';
import Posts from '@/components/Posts';
import LoginForm from '@/components/LoginForm';
import CreatePostForm from '@/components/CreatePostForm';

export default function Home() {
  const IsLoggedIn: boolean = false;

  // flex min-h-screen flex-col items-center justify-between p-24 bg-green-500

  return (
    <div className="m-4">
      <div className="flex flex-col max-h-screen items-center p-24">
        <Posts />
      </div>
    </div>
  );
}
