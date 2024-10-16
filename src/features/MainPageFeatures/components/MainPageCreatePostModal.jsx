import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default function MainPageCreatePostModal({ displayModal }) {
  if (!displayModal) return null;

  // add style and context
  return createPortal(
    <div className="
    fixed top-28 left-2/4 text-xl -translate-x-1/2 
    text-white border">
      MainPageCreatePostModal
    </div>,
    document.getElementById('root')
  )
}

MainPageCreatePostModal.propTypes = {
  displayModal: PropTypes.bool.isRequired,
}