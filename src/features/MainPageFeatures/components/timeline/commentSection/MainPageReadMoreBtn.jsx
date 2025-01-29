import PropTypes from "prop-types";

export default function MainPageReadMoreBtn({ isMultiLine, isExpanded, setIsExpanded }) {
  // Function to toggle the expansion of the comment
  const toggleExpand = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    isMultiLine && <button type="button" onClick={toggleExpand} className="text-blue-500 text-xs">
      {isExpanded ? 'Read Less' : 'Read More'}
    </button>
  )
}

MainPageReadMoreBtn.propTypes = {
  isMultiLine: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
};