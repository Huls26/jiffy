import { createUser } from '@/api/signupPageAPI';

export default async function action({ request }) {
  const res = await createUser(request);

  return {
    ...res,
  };
}
