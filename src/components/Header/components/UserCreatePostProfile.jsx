import CreatePostBtn from './CreatePostBtn';
import UserPhoto from './UserPhoto';

export default function UserCreatePostProfile() {
  return (
    <div className="flex space-x-2 items-center">
      <CreatePostBtn onClick={() => console.log('createPost')} />
      <UserPhoto />
    </div>
  );
}
