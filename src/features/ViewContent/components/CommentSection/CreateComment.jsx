import { useContext, useState } from 'react';

import ContentBtn from '@components/Btn/ContentBtn';
import UserImage from '@components/UserImage';
import { dataContext } from '@context/dataContext';

export default function CreateComment() {
  const [data] = useContext(dataContext);
  const { userData } = data;
  const [btnDisplay, setBtnDisplay] = useState(() => false);
  const [bounce, setBounce] = useState(() => '');
  const displayBtn = btnDisplay ? '' : 'hidden';

  function handleSubmit() {
    setBounce('animate-bounce');
    document.getElementById('comment').value = 'Sorry, this feature is not available right now.';
  }

  function handleCancel() {
    setBtnDisplay(false);
    setBounce('');
    document.getElementById('comment').value = null;
  }
  return (
    <form className="flex flex-col space-x-3 mb-5">
      <div className="flex space-x-3">
        <UserImage userImg={userData?.userImg} />
        <label htmlFor="comment" className="w-full">
          <input
            type="text"
            id="comment"
            name="comment"
            placeholder="Sorry, this feature is not available right now."
            className={`
              bg-primary-1
                text-lg font-A text-red font-bold
                w-full
                pb-1
                outline-none
              focus:border-blue
                focus:border-b
                ${bounce}
              `}
            onClick={() => setBtnDisplay(true)}
          />
        </label>
      </div>
      <div className={`flex space-x-1 self-end ${displayBtn}`}>
        <ContentBtn text="create" bg="bg-aqua-1" onClick={() => handleSubmit()} />
        <ContentBtn text="cancel" bg="bg-bright-red" onClick={() => handleCancel()} />
      </div>

    </form>
  );
}
