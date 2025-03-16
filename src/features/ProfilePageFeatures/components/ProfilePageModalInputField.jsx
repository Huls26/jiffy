import PropTypes from "prop-types"

export default function ProfilePageModalInputField({ placeholder, type, value, onChange }) {
  return (
    <input
      className="px-2 py-1 bg-gray-800 text-gray-300 rounded"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange} />
  )
}

ProfilePageModalInputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}