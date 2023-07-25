import PropTypes from 'prop-types';
import ContentTextDisplay from './ContentTextDisplay';

export default function ContentDisplay({ docData }) {
  const { content, textContent } = docData;
  const maxLength = 252;
  // const isImg = typeof content === 'string';
  const sliceWord = textContent.slice(0, maxLength);

  return (
    content
      ? (
        <img
          src={content}
          alt="content"
          className="
                  w-full h-full
                  object-cover
                "
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
