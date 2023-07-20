import PropTypes from 'prop-types';

export default function CancelFileBtn({ onClick }) {
  return (
    <label htmlFor="cancelFile" className="flex">
      <h1 className="
                h-[16px] mt-1 p-1 bg-bright-red
                text-gray-light
                rounded-full leading-[5px]
                hover:text-white
                hover:bg-bRed
                active:bg-red
              "
      >
        x
      </h1>
      <input type="button" onClick={onClick} name="cancelFile" id="cancelFile" hidden />
    </label>
  );
}

CancelFileBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
