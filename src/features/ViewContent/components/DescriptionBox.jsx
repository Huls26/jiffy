import { useLocation } from 'react-router-dom';
import modifyTimeDate from '../utils/modifyTimeDate';
/* eslint-disable react/jsx-curly-brace-presence */
export default function DescriptionBox() {
  const { state } = useLocation();
  const { docData } = state;
  const timeDate = modifyTimeDate(docData);

  return (
    <section className="
                  border-dark-2 border border-b-2 border-r-2
                    px-3 pt-3 pb-4
                    mx-3 mb-4
                    rounded-lg
                    leading-none
                    text-gray-dark font-A
                  "
    >
      <p className="font-bold mb-4">{timeDate}</p>

      <p className="font-semibold">
        {
          docData.description
        }
        &apos;&apos;&apos;add more button&apos;&apos;
      </p>
    </section>
  );
}
