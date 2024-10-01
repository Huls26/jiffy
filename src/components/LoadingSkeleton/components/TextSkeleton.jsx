import PropTypes from "prop-types"

PropTypes

export default function TextSkeleton({ width }) {
  const style = `h-4 ${width} ms-2 bg-gray-300 rounded-full dark:bg-gray-600`

  return (
    <div className={style} />
  )
}

TextSkeleton.propTypes = {
  width: PropTypes.string.isRequired,
}