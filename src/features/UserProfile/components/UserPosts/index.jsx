import { useLoaderData } from 'react-router-dom';

import Contents from '@features/Contents';

export default function UserPosts() {
  const { querySnapshot } = useLoaderData();
  // const [data] = useContext(dataContext);
  // const { userId } = data;

  // console.log(userId, loaderRes);
  // console.log(data);

  return (
    querySnapshot && <Contents querySnapshot={querySnapshot.docs} />
  );
}
