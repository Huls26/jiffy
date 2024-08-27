/**
 * A loading skeleton component for displaying a placeholder while content is loading.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The children components to be displayed within the loading skeleton.
 *
 * @returns {React.ReactElement} - The loading skeleton component.
 */
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
