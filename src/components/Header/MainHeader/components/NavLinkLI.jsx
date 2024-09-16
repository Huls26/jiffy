import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * A React functional component that renders a list item containing a navigation link.
 * The link's style changes based on whether it is active or not.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.text - The text to display for the navigation link.
 * @param {string} props.to - The URL to navigate to when the link is clicked.
 *
 * @returns {JSX.Element} - A React functional component that renders a list item with a navigation link.
 */
export default function NavLinkLI({ text, to, title }) {
  const defaultStyle =
    "pb-1 text-xs md:text-lg border-gray-600 hover:border-b-2 hover:text-gray-400 transition";
  const activeStyle =
    "pb-1 text-xs md:md:text-lg border-gray-400 border-b-2 hover:text-gray-400 hover:border-gray-600 transition";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
        title={title}
      >
        {text}
      </NavLink>
    </li>
  );
}

NavLinkLI.propTypes = {
  text: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
};
