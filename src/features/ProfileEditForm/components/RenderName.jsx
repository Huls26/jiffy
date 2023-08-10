import PropTypes from 'prop-types';

export default function RenderName({ userData }) {
  return (
    <>
      <h1 className="font-PS font-bold text-lg text-gray-dark">
        {userData?.firstname}
        {' '}
        {userData?.lastname}
      </h1>
      <button type="button" className="hover:font-bold">
        <h1 className="font-A text-gray ">
          @
          {userData?.username}
        </h1>
      </button>
    </>
  );
}

RenderName.propTypes = {
  userData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};
