import { useContext } from 'react';
import { contentDataContext } from '../context';

export default function DisplayContent() {
  const { docData } = useContext(contentDataContext);
  const { content, textContent } = docData;
  // const isImg = typeof content === 'string';
  console.log(content, textContent);

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
      <h1 className="w-full h-full flex items-center justify-center
      text-2xl font-bold font-PS
    "
      >
        {textContent}
      </h1>
    );

  return (
    <div className="h-72 mb-2 bg-gradient-to-r from-blue via-purple to-pink shadow-lg">
      {displayContent}
    </div>
  );
}
