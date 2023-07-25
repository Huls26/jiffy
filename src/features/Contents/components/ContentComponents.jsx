import { memo } from 'react';
import DisplayContent from './DisplayContent';
import DetailsContent from './DetailsContent';

// hover:contrast-150
// hover:brightness-150
// hover:backdrop-contrast-50 transition-all ease-in-out
function ContentComponents() {
  return (
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3">
      <DisplayContent />
      <DetailsContent />
    </article>
  );
}

const memoContentsComponents = memo(ContentComponents);
export default memoContentsComponents;
