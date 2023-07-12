export default function SuccessMessage({ actionData }) {
  const successMessage = actionData
  && !actionData?.isInvalid
    ? (
      <h1 className="
    text-green font-A text-xl font-bold
    mb-3
  "
      >
        {actionData.resMessage}
      </h1>
    ) : null;
  return (
    successMessage
  );
}
