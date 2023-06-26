import PropTypes from 'prop-types';

export default function ProfilePhoto({ userImg }) {
  return (
    <div className="
                w-24 h-24
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

ProfilePhoto.propTypes = {
  userImg: PropTypes.string.isRequired,
};
