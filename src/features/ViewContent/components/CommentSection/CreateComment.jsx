import { useContext, useState } from 'react';

import ContentBtn from '@components/Btn/ContentBtn';
import UserImage from '@components/UserImage';
import { dataContext } from '@context/dataContext';

export default function CreateComment() {
  const [data] = useContext(dataContext);
  const { userData } = data;
  const [btnDisplay, setBtnDisplay] = useState(() => false);
  const displayBtn = btnDisplay ? '' : 'hidden';

  return (
    <form className="flex flex-col space-x-3 mb-5">
      <div className="flex space-x-3">
        <UserImage userImg={userData?.userImg} />
        <label htmlFor="comment" className="w-full">
          <input
            type="text"
            id="comment"
            name="comment"
            placeholder="Comments here..."
            className="
              bg-primary-1
                text-base font-A text-dark-2
                w-full
                pb-1
                outline-none
              focus:border-blue
                focus:border-b
              "
            onClick={() => setBtnDisplay(true)}
          />
        </label>
      </div>
      <div className={`flex space-x-1 self-end ${displayBtn}`}>
        <ContentBtn text="create" bg="bg-aqua-1" />
        <ContentBtn text="cancel" bg="bg-bright-red" onClick={(() => setBtnDisplay(false))} />
      </div>

    </form>
  );
}
