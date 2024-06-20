import { useLoaderData } from 'react-router-dom';

import Contents from '@/features/Contents';

export default function UserPosts() {
  const { querySnapshot } = useLoaderData();

  return (
    querySnapshot && <Contents querySnapshot={querySnapshot.docs} />
  );
}
