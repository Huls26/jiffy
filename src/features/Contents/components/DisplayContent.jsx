import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contentDataContext } from '../context';

export default function DisplayContent() {
  const { docData, contentId } = useContext(contentDataContext);
  const { content, textContent } = docData;
  const maxLength = 252;
  // const isImg = typeof content === 'string';
  const sliceWord = textContent.slice(0, maxLength);

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
      <div className="w-full h-full px-11 flex items-center justify-center">
        <p className="text-dark-1 text-2xl font-bold font-PS text-justify leading-tight opacity-90 text-ellipsis overflow-hidden break-words">
          {sliceWord}
        </p>
      </div>

    );

  return (
    <Link to="view" state={{ docData, contentId }} preventScrollReset={false}>
      <div className="h-72 mb-2 bg-gradient-to-r from-blue via-purple to-pink shadow-lg transition hover:transform-gpu hover:scale-[1.02]">
        {displayContent}
      </div>
    </Link>

  );
}
