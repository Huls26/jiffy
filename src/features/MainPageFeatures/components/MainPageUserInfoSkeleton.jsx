import LoadingSkeleton from '@/components/LoadingSkeleton';
import ProfileSkeleton from '@/components/LoadingSkeleton/components/ProfileSkeleton';
import TextSkeleton from '@/components/LoadingSkeleton/components/TextSkeleton';

export default function MainPageUserInfoSkeleton() {
  return (
    <LoadingSkeleton>
      <div className='p-1 pl-2 flex'>
        <ProfileSkeleton />
        <div className='space-y-1'>
          <TextSkeleton width={"w-20"} />
          <TextSkeleton width={"w-32"} />
        </div>
      </div>
    </LoadingSkeleton >
  )
}
