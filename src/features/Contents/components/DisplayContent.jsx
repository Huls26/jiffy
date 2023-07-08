import { useContext } from 'react';
import { contentDataContext } from '../context';

export default function DisplayContent() {
  const { docData } = useContext(contentDataContext);
  const { content, textDetails } = docData;
  const isImg = typeof content === 'string';

  const displayContent = isImg
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
    : <div>{textDetails}</div>;

  return (
    <div className="h-72 mb-2">
      {displayContent}
    </div>
  );
}
