import sampleData from './data/dataSet';
import MapContents from './utils/MapContents';

export default function Contents() {
  const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';

  return (
    <section>
      <MapContents contentsData={sampleData} contentImg={imgUrl} />
    </section>
  );
}
