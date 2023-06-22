// import { Form } from 'react-router-dom';

export default function Header() {
  return (
    <header className="
    flex justify-between items-center
    px-5 py-3
    border
    "
    >
      <h1 className="font-A text-lg">Logo Here</h1>
      <form>
        <input type="text" placeholder="Search" />
        <input type="submit" />
      </form>

      <div className="flex space-x-2 items-center">
        <h1 className="font-A">+</h1>
        <div className="bg-dark-1 w-10 h-10 text-white text-[.7em] text-center rounded-full">
          user photo
        </div>
      </div>
    </header>
  );
}
