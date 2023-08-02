import PropTypes from 'prop-types';
import profilePhotoBg from '@default';

export default function ProfilePhoto({ userImg }) {
  return (
    <div className={`
                ${profilePhotoBg}
                w-24 h-24
                rounded-full
                shrink-0
                grow-0
              `}
    >
      <img
        src={userImg}
        alt=""
        className="
                      w-full h-full object-cover
                      border-dark-1
                      border-[.2em]
                      rounded-full
                    "
        loading="lazy"
      />
    </div>
  );
}

ProfilePhoto.propTypes = {
  // eslint-disable-next-line react/require-default-props
  userImg: PropTypes.string,
};
