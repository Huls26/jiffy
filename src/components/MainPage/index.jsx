import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoadingContents from '@/components/MainPage/LoadingContents';
import Contents from '@/features/Contents';

export default function SuspenseMainPage({ querySnapshot }) {
  return (
    <Suspense fallback={<LoadingContents />}>
      <Await resolve={querySnapshot}>
        {
        (data) => <Contents querySnapshot={data.docs} />
      }
      </Await>
      <h1 className="text-center text-gray -mt-3">Ow hi there you&apos;ve reach the bottom part</h1>
    </Suspense>
  );
}

SuspenseMainPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  querySnapshot: PropTypes.object.isRequired,
};
