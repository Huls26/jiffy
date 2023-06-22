// import { Form } from 'react-router-dom';

export default function Header() {
  // const enterText = 'U+02192';

  return (
    <header className="
    flex justify-between items-center
    text-dark-2
    p-3
    border
    "
    >
      <h1 className="font-A text-lg font-extrabold">J I F F Y</h1>
      <form className="border-dark-2">
        <input
          type="text"
          placeholder="Search"
          className="
            rounded-l-full pl-3 py-1
            outline-none
            border-dark-2
            border-2
            focus:border-focus-1
          "
        />
        <button
          type="button"
          onClick={() => console.log('submit')}
          className="
          bg-yellow-1 rounded-r-full
            pr-3 pl-1 py-1
          border-dark-2
            border-y-2
            border-r-2
            hover:opacity-80
            active:bg-yellow-2
            active:border-focus-1
          "
        >
          🔎

        </button>
      </form>

      <div className="flex space-x-2 items-center">
        <button
          type="button"
          className="
            bg-aqua-1
              font-A text-sm
              p-1
              font-extrabold
              rounded-full
              border-dark-2
              border-2
              hover:opacity-80
              active:bg-aqua-2
            "
        >
          ➕
        </button>
        <div className="
          bg-yellow-2
          w-10 h-10
          text-dark2 text-[.7em] text-center
          border-dark-2
          border-2
          rounded-full
        "
        >
          user photo
        </div>
      </div>
    </header>
  );
}
