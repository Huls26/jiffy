import CreatePostEditor from '@features/CreatePost/Components/CreatePostEditor';
import UserProfile from '@features/CreatePost/Components/UserProfile';

export default function CreatePostPage() {
  return (
    <main className="px-5 pb-3 pt-24">
      <h1 className="font-PS text-xl text-center font-bold">Create Post</h1>
      <UserProfile />
      <CreatePostEditor />
    </main>
  );
}
