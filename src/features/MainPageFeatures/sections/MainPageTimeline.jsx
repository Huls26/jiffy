import MainPageAuthFilterOptions from '../components/timeline/MainPageAuthFilterOptions';
import MainPageNoContentMessage from '../components/timeline/MainPageNoContentMessage';
import MainPagePostsFeed from '../components/timeline/MainPagePostsFeed';
import useRealtimeUserPosts from '../hooks/useRealtimeUserPosts';;

export default function MainPageTimeline() {
  const userPosts = useRealtimeUserPosts();
  console.log("set image min-height user posts")

  return (
    <main className="mt-1 sm:mx-3 pt-3 flex-1 text-gray-100">
      <MainPageAuthFilterOptions isDisplay={userPosts} />
      <MainPagePostsFeed userPosts={userPosts} />
      <MainPageNoContentMessage userPosts={userPosts} />
    </main>
  );
}

MainPageTimeline.whyDidYouRender = true;