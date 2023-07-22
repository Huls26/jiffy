import { memo } from 'react';
import DisplayContent from './DisplayContent';
import DetailsContent from './DetailsContent';

// hover:contrast-150
// hover:brightness-150
function ContentComponents() {
  return (
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3 hover:backdrop-contrast-75 transition-all ease-in-out">
      <DisplayContent />
      <DetailsContent />
    </article>
  );
}

const memoContentsComponents = memo(ContentComponents);
export default memoContentsComponents;
