import ContentBtn from '@components/Btn/ContentBtn';
import UserDetails from './UserDetails';

export default function DetailsContent() {
  return (
    <section className="
        flex justify-between items-start
        w-full
        px-3 text-dark-2
      "
    >
      <UserDetails />
      <ContentBtn text="Update/Delete" />
    </section>
  );
}
