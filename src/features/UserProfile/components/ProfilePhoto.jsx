import PropTypes from 'prop-types';
import bgColor from '@defaultSetting/bgColor';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ProfilePhoto({ userImg }) {
  const profilePhotoBg = bgColor;

  return (
    <div className={`
                ${profilePhotoBg}
                w-24 h-24
                rounded-full
                shrink-0
                grow-0
              `}
    >
      <LazyLoadImage
        alt="profile photo"
        className=" w-24 h-24 object-cover
                  border-dark-1
                    border-[.2em]
                    rounded-full
                  "
        src={userImg}
        effect="blur"
      />
    </div>
  );
}

ProfilePhoto.propTypes = {
  // eslint-disable-next-line react/require-default-props
  userImg: PropTypes.string,
};
