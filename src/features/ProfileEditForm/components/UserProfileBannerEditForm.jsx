import { useContext } from 'react';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';
import ProfilePhoto from '@features/UserProfile/components/ProfilePhoto';

export default function UserProfileBannerEditForm() {
  const [data] = useContext(dataContext);
  const { userData } = data;
  const {
    firstname, lastname, username, userBanner, userImg,
  } = userData;

  console.log(userData);
  return (
    <section className="py-3 text-center">
      <h1 className="font-PS font-bold text-lg text-gray-dark">
        {firstname}
        {' '}
        {lastname}
      </h1>
      <button type="button" className="hover:font-bold">
        <h1 className="font-A text-gray ">
          @
          {username}
        </h1>
      </button>

      <div className="mb-2">
        <ContentBtn text="Edit Profile info" />
      </div>

      <div className="w-full h-20">
        <img src={userBanner} alt="" />
      </div>
      <div className="text-left mb-4">
        <ContentBtn text="upload new banner" bg="bg-aqua-2" />
      </div>

      <div className="flex justify-center mb-2 opacity-90">
        <ProfilePhoto userImg={userImg} />
      </div>

      <ContentBtn text="upload new photo" bg="bg-aqua-2" />

      <div className="mt-2 space-x-1">
        <ContentBtn text="Save changes" bg="bg-green" />
        <ContentBtn text="Cancel" bg="bg-peach-1" />
      </div>

    </section>
  );
}
