import PropTypes from 'prop-types'

export default function MainPageAccountSuggestionTitle({ isDisplay }) {
  return (
    isDisplay &&
    <h1 className="ml-2 sm:text-center text-left font-semibold text-lg text-cyan-200">
      Suggested acounts to follow
    </h1>

  )
}

MainPageAccountSuggestionTitle.propTypes = {
  isDisplay: PropTypes.bool.isRequired,
}
