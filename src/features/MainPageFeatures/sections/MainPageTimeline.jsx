import MainPageAuthFilterOptions from '../components/timeline/MainPageAuthFilterOptions';
import MainPageNoContentMessage from '../components/timeline/MainPageNoContentMessage';
import MainPageUserProfileLink from '../components/userInfo/MainPageUserProfileLink';
import useRealtimeUserPosts from '../hooks/useRealtimeUserPosts';
import formatRelativeTime from '../utils/timeline/formatRelativeTime';

export default function MainPageTimeline() {
  const userPosts = useRealtimeUserPosts();

  return (
    <main className="mt-1 sm:mx-3 pt-3 flex-1 text-gray-100">
      <MainPageAuthFilterOptions isDisplay={userPosts} />

      <section className='grid place-self-center'>
        {userPosts?.map((userPost) => {
          const relativeTime = formatRelativeTime(userPost?.dateCreated);

          return (
            <div
              key={userPost.postId}
              className='my-1 space-y-2 bg-slate-950 text-start min-w-[270px] max-w-xl sm:rounded-lg border-4 border-gray-950'
            >
              <div className='mx-2 m-1 flex justify-between'>
                <MainPageUserProfileLink
                  to={`profile/${userPost.username}`}
                  photoURL={userPost.photoURL}
                  username={userPost.username}
                  email={userPost.email}
                />
                <h1 className='font-semibold text-xs text-gray-400'>{relativeTime} ago</h1>
              </div>
              <h1 className='ml-2 sm:text-xl'>{userPost.textContent}</h1>
              <img
                src={userPost.content}
                alt={`users post content: ${userPost.textContent}`}
              />
            </div>);
        })}
      </section>

      <MainPageNoContentMessage userPosts={userPosts} />
    </main>);
}

MainPageTimeline.whyDidYouRender = true;