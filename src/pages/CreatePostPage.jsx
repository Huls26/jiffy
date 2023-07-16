import UserPhoto from '@components/Header/components/UserPhoto';
import CreatePostEditor from '@features/CreatePost/Components/CreatePostEditor';
import { useActionData } from 'react-router-dom';

export async function action({ request }) {
  const formData = await request.formData();
  const imageFile = formData.get('imageFile');
  console.log(imageFile.value);

  return imageFile;
}

export default function CreatePostContent() {
  const imageFile = useActionData();

  console.log(imageFile);
  return (
    <main className="px-5 py-3">
      <h1 className="font-PS text-xl text-center font-bold">Create Post</h1>
      <div className="flex items-center space-x-1 mb-3">
        <UserPhoto />
        <h1 className="font-A font-semibold text-dark-2 opacity-90 hover:text-purple hover:text-lg">username</h1>
      </div>
      <CreatePostEditor />
    </main>
  );
}
