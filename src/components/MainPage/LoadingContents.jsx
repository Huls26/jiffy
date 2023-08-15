import SkeletonMainPage from './SkeletonMainPage';

export default function LoadingContents() {
  // set skeleton
  function skeletonContents() {
    const array = [];
    const min = 27;

    for (let i = 0; i < min; i += 1) {
      array.push(<SkeletonMainPage key={i} />);
    }

    return array;
  }

  const skeleton = skeletonContents();
  const displaySkeleton = skeleton.map((s) => s);

  return (
    <div className="pt-20">
      {displaySkeleton}
    </div>
  );
}
