import Posts from '@/components/Posts';

export default function Home() {
  return (
    <div className="m-4">
      <div className="flex flex-col max-h-screen items-center p-24">
        <h1 className="text-bold text-3xl">Latest Posts</h1>
        <Posts />
      </div>
    </div>
  );
}
