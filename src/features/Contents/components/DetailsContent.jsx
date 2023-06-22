import PropTypes from 'prop-types';

export default function DetailsContent({ details }) {
  const { userImg, username, textDetails } = details;
  return (
    <section>
      <img src={userImg} alt="userPhoto" />
      <div>
        <h1>{textDetails}</h1>
        <h6>{username}</h6>
        <div>
          <button type="button">Like</button>
          <button type="button">Comment</button>
        </div>
      </div>
      <button type="button">Update/Delete</button>
    </section>
  );
}

DetailsContent.propTypes = {
  details: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string.isRequired,
  }).isRequired,
};
