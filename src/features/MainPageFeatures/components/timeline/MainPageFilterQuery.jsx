export default function MainPageFilterQuery() {
  return (
    <section className='inline-flex' >
      <button
        type='button'
        className="bg-sky-500 bg-gray-900 hover:bg-gray-700 text-gray-200 font-bold py-1 px-3 rounded-l"
      >
        All
      </button>
      <button
        type='button'
        className="bg-gray-900 hover:bg-gray-700 active:bg-sky-500 text-gray-200 font-bold py-1 px-3"
      >
        Likes
      </button>
      <button
        type='button'
        className="bg-gray-900 hover:bg-gray-700 active:bg-sky-500 text-gray-200 font-bold py-1 px-3 rounded-r"
      >
        Following
      </button>
    </section >
  )
}
