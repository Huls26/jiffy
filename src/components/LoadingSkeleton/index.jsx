export default function LoadingSkeleton({ children }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="max-w-screen-2xl animate-pulse"
    >
      {children}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
