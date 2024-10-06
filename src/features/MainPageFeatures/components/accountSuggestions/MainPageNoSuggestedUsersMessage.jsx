import PropTypes from 'prop-types'

export default function MainPageNoSuggestedUsersMessage({ isDisplay }) {
  return (
    isDisplay && <h1 className="my-2 font-semibold text-gray-300 text-sm">"No Suggested Users at the Moment"</h1>
  )
}

MainPageNoSuggestedUsersMessage.propTypes = {
  isDisplay: PropTypes.bool.isRequired,
}