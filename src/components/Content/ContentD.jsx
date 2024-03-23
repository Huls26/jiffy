/* eslint-disable max-len */
import { lazy } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ContentTextDisplay = lazy(() => import('./ContentTextDisplay'));

export default function ContentDisplay({ docData, scrollPosition }) {
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
          className="w-screen h-72 object-contain md:rounded-t-sm"
          effect="blur"
          scrollPosition={scrollPosition}
        />
      )
      : (
        <ContentTextDisplay textContent={sliceWord} />
      )
  );
}

ContentDisplay.propTypes = {
  // eslint-disable-next-line react/require-default-props
  docData: PropTypes.shape({
    content: PropTypes.string,
    textContent: PropTypes.string,
  }),
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  scrollPosition: PropTypes.object,
};
