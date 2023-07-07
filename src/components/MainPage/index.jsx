import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contents from '@features/Contents';

export default function SuspenseMainPage({ querySnapshot }) {
  return (
    <Suspense fallback={<h1>...Loading</h1>}>
      <Await resolve={querySnapshot}>
        {
        (data) => <Contents querySnapshot={data.docs} />
      }
      </Await>
      <h1 className="text-center text-gray mt-5">Ow hi there you&apos;ve reach the bottom part</h1>
    </Suspense>
  );
}

SuspenseMainPage.propTypes = {
  querySnapshot: PropTypes.func.isRequired,
};
