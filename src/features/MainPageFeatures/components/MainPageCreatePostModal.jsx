import MainPageUserProfileLink from "../components/userInfo/MainPageUserProfileLink";

import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default function MainPageCreatePostModal({ displayModal, userInfo }) {
  const { username, photoURL } = userInfo;

  if (!displayModal) return null;

  // add style and context
  return createPortal(
    <div className="
      fixed top-24 left-2/4 -translate-x-1/2 
      px-3 py-2
      w-10/12 max-w-3xl
    bg-slate-950
      border-2 border-gray-300 rounded-lg
      space-y-2
    ">
      <MainPageUserProfileLink
        to={`profile/${username}`}
        photoURL={photoURL}
        username={username}
        email={''}
      />
      <input
        type="text"
        className="bg-slate-950 outline-none font-semibold text-gray-400"
        placeholder="Publish a Post"
      />
      <div className="flex justify-between text-white">
        <h1>imageLogo</h1>
        <button type="button" className="">Post</button>
      </div>
    </div>,
    document.getElementById('root')
  )
}

MainPageCreatePostModal.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
  }).isRequired,
}