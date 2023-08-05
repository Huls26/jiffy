import { lazy } from 'react';
import useResetScrollView from '@hooks/useResetScrollView';
// import ContentComponents from '@features/ViewContent';
const ContentComponents = lazy(() => import('@features/ViewContent'));

export default function ViewPage() {
  const userDetails = {
    userImg: 'https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    username: 'John Lee',
    textDetails: 'something awesome text',
  };

  // reset scroll view
  useResetScrollView();

  return (
    <main className="pt-24">
      <ContentComponents details={userDetails} />
    </main>
  );
}
