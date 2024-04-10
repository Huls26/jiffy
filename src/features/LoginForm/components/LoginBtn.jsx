// import style from '../style/loginBtnStyle';

export default function LoginBtn() {
  return (
    <button
      type="submit"
      className="
      bg-aqua-1
        font-LM text-lg font-bold
        w-full py-1 mt-2 mb-2
      border-dark-2 border border-r-2 border-b-2 rounded
        hover:opacity-80
      active:bg-green
        active:opacity-100
      "
    >
      Login
    </button>
  );
}
