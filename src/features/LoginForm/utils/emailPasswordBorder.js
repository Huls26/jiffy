export default function emailPasswordBorderColor(error) {
  const isErrorEmail = error?.email;
  const isErrorPassword = error?.password;
  const errorBorderC = 'border-red';
  const emailBorder = isErrorEmail ? errorBorderC : 'border-dark-2';
  const passwordBorder = isErrorPassword ? errorBorderC : 'border-dark-2';

  return {
    emailBorder, passwordBorder, isErrorEmail, isErrorPassword,
  };
}
