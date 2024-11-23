import UserProfile from "@/components/UserProfile";
import MainPageUserInfo from "./MainPageUserInfo";

import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function MainPageUserProfileLink({ to, photoURL, username, email }) {
  return (
    <Link to={to} className="flex items-center place-self-center ">
      <UserProfile photoURL={photoURL} addedClassName={'w-8 h-8 mr-2 hover:scale-110'} />
      <MainPageUserInfo username={username} email={email} />
    </Link>
  )
}

// const MemoMainPageUserProfileLink = memo(MainPageUserProfileLink);
// export default MemoMainPageUserProfileLink;

MainPageUserProfileLink.propTypes = {
  to: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

MainPageUserInfo.whyDidYouRender = true;