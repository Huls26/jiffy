export default function ErrorMessage({ actionData }) {
  const errorMessage = actionData
  && actionData?.isInvalid
    ? (
      <h1 className="
    text-bright-red font-A text-xl font-bold text-center
      mb-3 whitespace-pre-line
      capitalize
    "
      >
        {actionData.resMessage}
      </h1>
    ) : null;
  return (
    errorMessage
  );
}
