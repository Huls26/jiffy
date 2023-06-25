import PropTypes from 'prop-types';

import UserImage from '@components/UserImage';

export default function CommentSection({ details }) {
  return (
    <section className="px-3 py-4">
      <form className="flex space-x-3">
        <UserImage userImg={details.userImg} />
        <label htmlFor="comment" className="w-full">
          <input
            type="text"
            id="comment"
            name="comment"
            placeholder="Comments here..."
            className="
            bg-primary-1
              text-base font-A text-dark-2
              w-full
              pb-1
              outline-none
            focus:border-blue
              focus:border-b
            "
          />
        </label>
      </form>
    </section>
  );
}

CommentSection.propTypes = {
  details: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string.isRequired,
  }).isRequired,
};
