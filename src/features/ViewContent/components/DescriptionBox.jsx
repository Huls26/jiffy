import { useLocation } from 'react-router-dom';
// import { useState } from 'react';
import DisplayTimeDate from './DisplayTimeDate';
import DisplayDescriptionText from './DisplayDescriptionText';

// code clean up
export default function DescriptionBox() {
  const { state } = useLocation();
  const { docData } = state;

  return (
    <section className="
                  border-dark-2 border border-b-2 border-r-2
                    p-3 pb-2
                    mx-3 mb-4
                    rounded-lg
                    leading-none
                    text-gray-dark font-A
                  "
    >
      <DisplayTimeDate docData={docData} />
      <DisplayDescriptionText docData={docData} />
    </section>
  );
}
