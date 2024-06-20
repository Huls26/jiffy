import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectingCD({ loaderData }) {
  const redirecting = loaderData?.redirecting;
  const [timer, setTimer] = useState(() => 9);
  const navigate = useNavigate();
  const profilePagePath = `../profile/${loaderData.userId}`;

  // redirect user to profile page
  useEffect(() => {
    if (timer < 1) {
      navigate(profilePagePath);
    }
  }, [timer, navigate, profilePagePath]);

  // set timer
  useEffect(() => {
    const interval = redirecting
    && setInterval(() => setTimer((time) => time - 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [redirecting]);

  return (
    redirecting && <h3 className="font-A font-bold text-yellow-2 text-xl -mt-4">{timer}</h3>
  );
}

RedirectingCD.propTypes = {
  loaderData: PropTypes.shape({
    userId: PropTypes.string,
    redirecting: PropTypes.bool,
  }).isRequired,
};
