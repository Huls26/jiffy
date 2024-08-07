import PropTypes from "prop-types";
import { useEffect } from "react";

/**
 * A custom React hook that sets the page title using the document.title property.
 * The title is updated whenever the `title` prop changes.
 *
 * @function usePageTitle
 * @param {Object} props - The props object passed to the hook.
 * @param {string} props.title - The title to be set for the page.
 * @returns {void}
 */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

usePageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
