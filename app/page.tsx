import Image from 'next/image';
import Navarbar from '@/components/Navarbar';
import RegisterForm from '@/components/RegisterForm';

export default function Home() {
  const IsLoggedIn: boolean = false;

  return (
    <div className="m-4">
      <Navarbar />
      <div className=" flex min-h-screen flex-col items-center justify-between p-24">
        {!IsLoggedIn ? <RegisterForm /> : null}
      </div>
    </div>
  );
}
