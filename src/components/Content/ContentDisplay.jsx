/* eslint-disable max-len */
import { lazy } from 'react';
import PropTypes from 'prop-types';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ContentTextDisplay = lazy(() => import('./ContentTextDisplay'));

function ContentDisplay({ docData, scrollPosition }) {
  const { content, textContent } = docData;
  const maxLength = 252;
  // const isImg = typeof content === 'string';
  const sliceWord = textContent.slice(0, maxLength);

  return (
    content
      ? (
        <LazyLoadImage
          alt="content"
          src={content}
          className="w-screen h-72 object-cover"
          effect="blur"
          scrollPosition={scrollPosition}
        />
      )
      : (
        <ContentTextDisplay textContent={sliceWord} />
      )
  );
}

// export default ContentDisplay;
const TrackContenDisplay = trackWindowScroll(ContentDisplay);
export default TrackContenDisplay;

ContentDisplay.propTypes = {
  // eslint-disable-next-line react/require-default-props
  docData: PropTypes.shape({
    content: PropTypes.string,
    textContent: PropTypes.string,
  }),
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  scrollPosition: PropTypes.object,
};
