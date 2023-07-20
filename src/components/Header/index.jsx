import { Link } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import SearchForm from './components/SearchForm';

export default function Header() {
  // const enterText = 'U+02192';

  return (
    <header className="
    flex justify-between items-center
    text-dark-2
    p-3
    shadow
    "
    >
      <Link to="/">
        <h1 className="font-A text-2xl font-extrabold cursor-pointer hover:opacity-80">J I F F Y</h1>
      </Link>
      <SearchForm />
      <UserLogin />
    </header>
  );
}
