import FilterBtn from '@components/Btn/FilterBtn';

export default function FilterNavBtn() {
  return (
    <nav className="px-4 pb-3 space-x-2 shadow">
      <FilterBtn text="all" activeStyle={(params) => params === null} />
      <FilterBtn text="photos" activeStyle={(params) => params === 'content'} />
      <FilterBtn text="text content" activeStyle={(params) => params === 'textContent'} />
    </nav>
  );
}
