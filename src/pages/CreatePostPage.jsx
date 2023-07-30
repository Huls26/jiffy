import { redirect } from 'react-router-dom';

import { getCurrentUser } from '@api/onSnapUserAuth';
import CreatePostEditor from '@features/CreatePost/Components/CreatePostEditor';
import UserProfile from '@features/CreatePost/Components/UserProfile';

// delete loader if loader is available in api folder
export async function loader({ params }) {
  const urlId = params.id;
  const user = await getCurrentUser();
  const isValidAuth = urlId === user?.uid;

  if (!isValidAuth || !user?.uid) {
    return redirect('/');
  }
  // return { isValidAuth };
  return null;
}

export default function CreatePostPage() {
  return (
    <main className="px-5 pb-3 pt-24">
      <h1 className="font-PS text-xl text-center font-bold">Create Post</h1>
      <UserProfile />
      <CreatePostEditor />
    </main>
  );
}
