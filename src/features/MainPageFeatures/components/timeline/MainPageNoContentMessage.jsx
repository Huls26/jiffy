import PropTypes from "prop-types"

export default function MainPageNoContentMessage({ userPosts }) {
  if (userPosts?.length === 0) {
    return (
      <h1 className='mt-5 font-bold sm:text-xl text-cyan-500 text-pretty'>Sorry No Content Right Now! :(</h1>
    )
  }

  return null;
}

MainPageNoContentMessage.propTypes = {
  userPosts: PropTypes.arrayOf(PropTypes.object),
}