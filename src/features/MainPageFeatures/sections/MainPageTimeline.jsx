import MainPageAuthFilterOptions from '../components/timeline/MainPageAuthFilterOptions';
import MainPageNoContentMessage from '../components/timeline/MainPageNoContentMessage';
import MainPagePostsFeed from '../components/timeline/userPost/MainPagePostsFeed';
import useRealtimeUserPosts from '../hooks/useRealtimeUserPosts';

export default function MainPageTimeline() {
  const userPosts = useRealtimeUserPosts();

  return (
    <main className="mt-1 sm:mx-3 pt-3 flex-1 text-gray-100">
      <MainPageAuthFilterOptions isDisplay={userPosts} />
      <MainPagePostsFeed userPosts={userPosts} />
      <MainPageNoContentMessage userPosts={userPosts} />
    </main>
  );
}