import { Link } from 'react-router-dom';
import resetScrollView from '@utils/resetScrollView';
import UserLogin from './components/UserLogin';
// import SearchForm from './components/SearchForm';

// remove searchBar: to be continued
export default function Header() {
  // const enterText = 'U+02192';
  // const { id } = useParams();

  return (
    <header className="
    w-full bg-primary-1
    flex justify-between items-center
    text-dark-2
    p-3
    shadow
    fixed z-50
    "
    >
      <Link to="/">
        <button type="button" onClick={resetScrollView}>
          <h1 className="font-A text-2xl font-extrabold cursor-pointer hover:opacity-80">J I F F Y</h1>
        </button>
      </Link>

      {/* render searchBar and remove searchBar when viewProfile */}
      {/* {!id && <SearchForm />} */}
      <UserLogin />
    </header>
  );
}
