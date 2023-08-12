import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ContentTextDisplay from './ContentTextDisplay';

export default function ContentDisplay({ docData }) {
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

};
