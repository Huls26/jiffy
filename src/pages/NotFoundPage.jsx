import { Link } from 'react-router-dom';
import ContentBtn from '@/components/Btn/ContentBtn';

export default function NotFoundPage() {
  return (
    <section className="pt-36 font-A text-center ">
      <div className="mb-9 animate-bounce text-peach-1">
        <h1 className="font-bold text-2xl">Sorry!</h1>
        <h1 className="text-gray text-lg">This page isn&apos;t available</h1>
      </div>

      <Link to="/">
        <ContentBtn text="home" bg="bg-purple" />
      </Link>
    </section>
  );
}
