import PropTypes from 'prop-types';

import UserImage from '@components/UserImage';
import UserComments from './UserComments';

export default function CommentSection({ details }) {
  const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';
  const comments = [
    {
      id: '1',
      userImg: imgUrl,
      username: 'Patrick Star',
      date: '9 months ago',
      userComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut.',
    },
    {
      id: '2',
      userImg: imgUrl,
      username: 'Patrick Star',
      date: 'today',
      userComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut.',
    },
    {
      id: '3',
      userImg: imgUrl,
      username: 'Patrick Star',
      date: '3 days ago',
      userComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut.',
    },
    {
      id: '4',
      userImg: imgUrl,
      username: 'Patrick Star',
      date: '3 months ago',
      userComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut.',
    },
    {
      id: '5',
      userImg: imgUrl,
      username: 'Patrick Star',
      date: 'today',
      userComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut.',
    },
  ];

  const renderComments = comments
    .map((commentDetails) => (
      <UserComments
        key={commentDetails.id}
        commentsDetail={commentDetails}
      />
    ));

  return (
    <section className="px-3 py-4">
      <form className="flex space-x-3 mb-5">
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

      {renderComments}
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
