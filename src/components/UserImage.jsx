import PropTypes from 'prop-types';

export default function UserImage({ userImg }) {
  return (
    <div className="
                w-11 h-11
                rounded-full
                shrink-0
                grow-0
              "
    >
      <img
        src={userImg}
        alt="userPhoto"
        className="
                      w-full h-full object-cover
                      border-dark-1
                      border-[.2em]
                      rounded-full
                    "
      />
    </div>
  );
}

UserImage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  userImg: PropTypes.string,
};
