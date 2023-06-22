// import { Form } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Logo Here</h1>
      <form>
        <input type="text" />
        <input type="submit" />
      </form>

      <div>
        <h1>Create post logo</h1>
        <div className="bg-black w-10 h-10 text-white text-[.7em] text-center rounded-full">
          user photo
        </div>
      </div>
    </header>
  );
}
