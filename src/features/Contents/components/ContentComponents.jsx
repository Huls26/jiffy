import DisplayContent from './DisplayContent';
import DetailsContent from './DetailsContent';

export default function ContentComponents() {
  return (
    <article className="mb-4 border-dark-2 border border-b-2 border-r-2 pb-3">
      <DisplayContent />
      <DetailsContent />
    </article>
  );
}
