import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import bgColor from '@defaultSetting/bgColor';

export default function UserImage({ userImg }) {
  const bgC = bgColor;

  return (
    <div className={
                `w-11 h-11
                ${bgC}
                rounded-full
                shrink-0
                grow-0`
    }
    >
      <LazyLoadImage
        alt="content"
        src={userImg}
        className="
            w-11 h-11
            object-cover
          border-dark-1 border-[.2em]
            rounded-full
          "
        effect="blur"
      />
    </div>
  );
}

UserImage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  userImg: PropTypes.string,
};
