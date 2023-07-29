import { lazy } from 'react';

const Header = lazy(() => import('./components/Header'));

// remove this
// export async function loader({ params }) {
//   const urlId = params.id;
//   const user = await getCurrentUser();
//   const me = urlId === user?.uid;

//   if (!user?.uid) {
//     return redirect('/');
//   } if (!me) {
//     const userData = await getUsersData(urlId);
//     return userData;
//   }

//   return null;
// }

export default function UserProfile() {
  return (
    <>
      <Header />

      {/* the data should fetch from the user */}
      {/* <section>
        <Contents />
      </section> */}
    </>
  );
}
