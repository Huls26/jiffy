import PropTypes from 'prop-types';
import MainPageAccountSuggestionProfile from "./MainPageAccountSuggestionProfile";


export default function MainPageAccountSuggestionUserList({ list }) {
  return (
    list?.map((user) => (
      <MainPageAccountSuggestionProfile key={user.userId} user={user} />
    ))
  )
}

MainPageAccountSuggestionUserList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
}
