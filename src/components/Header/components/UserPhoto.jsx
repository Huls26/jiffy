import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '@context/dataContext';
import bgColor from '@default/bgColor';

export default function UserPhoto() {
  const [data] = useContext(dataContext);
  const { userId, userData } = data;
  const { userImg } = userData;
  const defaultUserImage = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=740t=st=1688796331~exp=1688796931~hmac=a892b8ed0f19fd1c95171c93cdb4a0b94ec58ca1972d594ca36db1d7ed265279';
  const linkTo = `profile/${userId}`;
  const profilePhotoBg = userImg ? bgColor : 'bg-primary-1';

  return (
    <Link to={linkTo}>
      <div
        className={`
                     ${profilePhotoBg}
                      w-10 h-10
                      text-dark2 text-[.7em] text-center
                      rounded-full
                    `}
        onMouseEnter={() => console.log('UserName display')}
      >
        <img
          className={`
              before:bg-[url('bgColor')] 
              w-full h-full object-cover
            border-dark-1 border-[.2em] border-b-2
              border-r-2 rounded-full
            `}
          src={userImg || defaultUserImage}
          alt=""
        />
      </div>
    </Link>
  );
}
