import { collection, getDocs } from 'firebase/firestore';
import { db } from '@api/FB';
import LoginForm from '@features/LoginForm';
import { useEffect } from 'react';

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  if (username && password) {
    console.log(username, password);
    console.log('Successful login');
  }

  return null;
}

export default function LoginPage() {
  useEffect(() => {
    (async function readData() {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }());
  }, []);

  return (
    <main
      className="flex justify-center pt-10"
    >
      <LoginForm />
    </main>
  );
}
