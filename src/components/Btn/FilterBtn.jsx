/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import useHandleSearchParams from '@/hooks/useHandleSearchParams';

export default function FilterBtn({ text, activeStyle }) {
  const { searchParams, handleSetSearchParams } = useHandleSearchParams();
  const getParamsValue = searchParams.get('f');
  const isActive = (activeStyle(getParamsValue) && 'bg-green') || 'bg-yellow-1';

  const paramsValue = (value) => {
    if (value === 'photos') {
      return 'content';
    } if (value === 'text content') {
      return 'textContent';
    }

    return null;
  };

  return (
    <button
      className={`
       ${isActive}
        font-A text-sm font-bold
        px-2 py-1
        rounded
        border-dark-2
        border
        border-b-2
        border-r-2
        capitalize
        hover:opacity-80
        active:bg-yellow-2
      `}
      type="button"
      onClick={() => handleSetSearchParams('f', paramsValue(text))}
    >
      {text}
    </button>
  );
}

FilterBtn.propTypes = {
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  activeStyle: PropTypes.any,
};
