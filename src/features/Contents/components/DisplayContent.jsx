import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ContentTextDisplay from '@components/Content/ContentTextDisplay';
import { contentDataContext } from '../context';

export default function DisplayContent() {
  const { docData, contentId } = useContext(contentDataContext);
  const { content, textContent } = docData;
  const maxLength = 252;
  // const isImg = typeof content === 'string';
  const sliceWord = textContent.slice(0, maxLength);

  // create to component COntent
  const displayContent = content
    ? (
      <img
        src={content}
        alt="content"
        className="
                  w-full h-full
                  object-cover
                "
      />
    )
    : (
      <ContentTextDisplay textContent={sliceWord} />
    );

  return (
    <Link to="view" state={{ docData, contentId }} preventScrollReset={false}>
      <div className="h-72 mb-2 bg-gradient-to-r from-blue via-purple to-pink shadow-lg transition hover:transform-gpu hover:scale-[1.02]">
        {displayContent}
      </div>
    </Link>

  );
}
