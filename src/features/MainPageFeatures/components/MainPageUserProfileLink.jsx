import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MainPageUserProfileLink({ username, email }) {
  return (
    <Link to={`profile/${username}`} className="text-left -space-y-1">
      <h2 className="text-sky-400 font-semibold hover:font-bold">
        {username}
      </h2>
      <p className="font-mono text-xs text-gray-300 hover:text-gray-400">
        {email}
      </p>
    </Link>
  )
}

MainPageUserProfileLink.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}