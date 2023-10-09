import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '@context/dataContext';
// import bgColor from '@defaultSetting/bgColor';
import profilePhoto from '@defaultSetting/profilePhotoBannerImages.js';

export default function UserPhoto() {
  const [data] = useContext(dataContext);
  const { userId, userData } = data;
  const { userImg, username } = userData;
  const [hoverProfile, setHoverProfile] = useState(() => false);
  const { defaultUserImage } = profilePhoto();
  const linkTo = `profile/${userId}`;
  // const backGroundColor = bgColor;
  // const profilePhotoBg = userImg ? `${backGroundColor}` : 'bg-primary-1';
  const hoverTransition = hoverProfile ? '' : 'opacity-0';

  // img style
  //  before:bg-[url('backGroundColor')]
  return (
    <Link to={linkTo} state>
      <div
        className={`
                     bg-primary-1
                      w-10 h-10
                      text-dark2 text-[.7em] text-center
                      rounded-full
                      relative
                    `}
        onMouseEnter={() => setHoverProfile(() => true)}
        onMouseLeave={() => setHoverProfile(() => false)}
      >
        <h1 className={`
          absolute top-10 left-1/2 -translate-x-1/2 
          text-gray-dark text-center leading-none 
          w-14 break-words 
          ${hoverTransition} transition-opacity 
          duration-300 ease-in-out
        `}
        >
          {username}
        </h1>

        <img
          className="
              w-full h-full object-cover
            border-dark-1 border-[.2em] border-b-2
              border-r-2 rounded-full
          "
          src={userImg || defaultUserImage}
          alt=""
        />
      </div>
    </Link>
  );
}
