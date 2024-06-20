import style from '../style/loginBtnStyle';

export default function LoginBtn() {
  return (
    <button
      type="submit"
      className={style().btnStyle}
    >
      Login
    </button>
  );
}
