import { lazy, useContext } from 'react';
import { Link } from 'react-router-dom';
import { contentDataContext } from '../context';

const ContentDisplay = lazy(() => import('@components/Content/ContentDisplay'));

export default function DisplayContent() {
  const { docData, contentId } = useContext(contentDataContext);

  return (
    <Link to="../view" state={{ docData, contentId }}>
      <div className="h-72 mb-2 bg-gradient-to-r from-blue via-purple to-pink shadow-lg transition hover:transform-gpu hover:scale-[1.02] hover:rounded-lg md:rounded-t-sm">
        <ContentDisplay docData={docData} />
      </div>
    </Link>

  );
}
