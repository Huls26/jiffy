import MainPageUserInfoSkeleton from '../MainPageUserInfoSkeleton';
import DiscoverUsersBtn from '../buttons/DiscoverUsersBtn';

import PropTypes from "prop-types";
import { lazy } from 'react';

const MainPageAccountSuggestionUserList = lazy(() => import('./MainPageAccountSuggestionUserList'));

export default function MainPageAccountSuggestionListDisplay({ suggestedUsersList, onClick, sidebarIsLoading }) {

  if (sidebarIsLoading) {
    return (
      <div className='px-2'>
        <MainPageUserInfoSkeleton />
        <MainPageUserInfoSkeleton />
        <MainPageUserInfoSkeleton />
      </div>

    )
  }

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
  sidebarIsLoading: PropTypes.bool,
}

MainPageAccountSuggestionListDisplay.whyDidYouRender = true;