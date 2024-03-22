import { defer } from 'react-router-dom';
import getFirestoreData from '@/api/getFirestoreData';

export default async function loader({ request }) {
  const url = new URL(request.url);
  const filterTag = url.searchParams.get('f');
  const orderContent = filterTag === 'content' ? 'desc' : 'asc';

  const querySnapshot = getFirestoreData(({
    query, collection, orderBy, db, where,
  }) => (
    filterTag
      ? query(collection(db, 'posts'), where(filterTag, '!=', ''), orderBy(filterTag, orderContent))
      : query(collection(db, 'posts'), orderBy('date', 'desc'))
  ));

  return defer({
    querySnapshot,
  });
}
