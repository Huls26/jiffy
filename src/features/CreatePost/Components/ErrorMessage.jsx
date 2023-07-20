export default function ErrorMessage({ message }) {
  const errorMessage = message
    ? (
      <h1 className="
    text-bright-red font-A text-lg font-bold text-center
     mb-3
    capitalize
  "
      >
        {message}
      </h1>
    ) : null;
  return (
    errorMessage
  );
}
