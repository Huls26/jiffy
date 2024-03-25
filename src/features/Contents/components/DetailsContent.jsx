import UserDetails from './UserDetails';
import style from '../style/displayDetailsContentStyle';

export default function DetailsContent() {
  return (
    <section className={style().detailsStyle}>
      <UserDetails />
    </section>
  );
}
