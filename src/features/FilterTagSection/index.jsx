import FilterBtn from './components/FilterBtn';

export default function FilterTagSection() {
  const tagTextSample = ['Comedy', 'Video', 'Funny', 'Meme', 'Picture', 'Emote'];

  const mapFilterText = [...tagTextSample]
    // eslint-disable-next-line react/no-array-index-key
    .map((tagText, idx) => <FilterBtn key={idx} text={tagText} />);
  return (
    <section>
      {mapFilterText}
    </section>
  );
}
