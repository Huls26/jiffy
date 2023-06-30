export default function ErrorMessage({ actionData }) {
  const errorMessage = actionData
  && actionData?.isInvalid
    ? (
      <h1 className="
    text-bright-red font-A text-xl font-bold
    mb-3
  "
      >
        {actionData.resMessage}
      </h1>
    ) : null;
  return (
    errorMessage
  );
}
