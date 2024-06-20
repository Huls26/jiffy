import { lazy, useContext } from 'react';
import { Link } from 'react-router-dom';
import contentDataContext from '../context/contentDataContext';
import style from '../style/displayDetailsContentStyle';

const ContentDisplay = lazy(() => import('@/components/Content/ContentDisplay'));

export default function DisplayContent() {
  const { docData, contentId } = useContext(contentDataContext);

  return (
    <Link to="../view" state={{ docData, contentId }}>
      <div className={style().displayStyle}>
        <ContentDisplay docData={docData} />
      </div>
    </Link>

  );
}
