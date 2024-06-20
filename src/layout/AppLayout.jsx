import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

export default function AppLayout() {
  return (
    <>
      <Header />
      <section className="max-w-3xl m-auto">
        <Outlet />
      </section>
    </>
  );
}
