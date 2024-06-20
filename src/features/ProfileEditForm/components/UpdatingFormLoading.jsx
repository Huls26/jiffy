import PropTypes from 'prop-types';

export default function UpdatingFormLoading({ loading }) {
  return (
    loading
    && (
    <h1 className="
      absolute top-[38%] text-center w-full
      font-LM font-bold text-yellow-2 text-3xl uppercase drop-shadow-md
      animate-bounce
      z-50
    "
    >
      ...updating
    </h1>
    )
  );
}

UpdatingFormLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
