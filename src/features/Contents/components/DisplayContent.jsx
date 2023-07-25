import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ContentDisplay from '@components/Content/ContentDisplay';
import { contentDataContext } from '../context';

export default function DisplayContent() {
  const { docData, contentId } = useContext(contentDataContext);

  return (
    <Link to="view" state={{ docData, contentId }}>
      <div className="h-72 mb-2 bg-gradient-to-r from-blue via-purple to-pink shadow-lg transition hover:transform-gpu hover:scale-[1.02]">
        <ContentDisplay docData={docData} />
      </div>
    </Link>

  );
}
