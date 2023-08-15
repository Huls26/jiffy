import { lazy } from 'react';
import PropTypes from 'prop-types';

import useHandleSearchParams from '@hooks/useHandleSearchParams';
import UserComments from './UserComments';

const CreateComment = lazy(() => import('./CreateComment'));

export default function CommentSection() {
  const { searchParams } = useHandleSearchParams();
  // display comment section
  const toDisplay = searchParams.get('view') === 'comments';
  const isDisplay = toDisplay ? '' : 'hidden';
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
    <section className={`${isDisplay} px-3 py-4`}>
      <CreateComment />

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
