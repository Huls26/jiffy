/* eslint-disable react/no-array-index-key */
import FilterBtn from '@components/Btn/FilterBtn';

export default function FilterTagSection() {
  const tagTextSample = ['Comedy', 'Video', 'Funny', 'Meme', 'Picture', 'Emote'];

  const mapFilterText = [...tagTextSample]
    .map((tagText, idx) => (
      <FilterBtn
        key={idx}
        text={tagText}
        activeStyle={() => false}
      />
    ));
  return (
    <section className="flex space-x-2 px-2 py-3 mt-3 mb-3">
      <FilterBtn text="all" activeStyle={() => false} />
      {mapFilterText}
    </section>
  );
}
