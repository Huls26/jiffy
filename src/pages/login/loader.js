import { getCurrentUser } from '@/api/onSnapUserAuth';

export default async function loader() {
  const user = await getCurrentUser();
  const userId = user?.uid;

  if (userId) {
    return {
      userId,
      resMessage: 'Oops! you need to logout before doing \n this action redirecting \n to profile page in: ',
      isInvalid: true,
      redirecting: true,
    };
  }

  return {
    resMessage: null,
    isInvalid: false,
    redirecting: false,
  };
}
