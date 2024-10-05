import PropTypes from 'prop-types'

export default function DiscoverUsersBtn({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-2 px-5 py-1 bg-blue-500
        font-semibold text-gray-200  
        rounded-full 
        hover:bg-blue-600 active:bg-blue-700
      ">
      Discover Users
    </button>
  )
}

DiscoverUsersBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}
