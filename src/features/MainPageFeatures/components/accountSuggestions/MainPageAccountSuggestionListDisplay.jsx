import DiscoverUsersBtn from '../buttons/DiscoverUsersBtn';
import MainPageAccountSuggestionUserList from './MainPageAccountSuggestionUserList';

import PropTypes from 'prop-types';

export default function MainPageAccountSuggestionListDisplay({ suggestedUsersList, onClick }) {
  if (suggestedUsersList !== null) {
    return (
      <MainPageAccountSuggestionUserList
        list={suggestedUsersList}
      />)
  }

  return (
    <DiscoverUsersBtn onClick={onClick} />
  )
}

MainPageAccountSuggestionListDisplay.propTypes = {
  suggestedUsersList: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
}
