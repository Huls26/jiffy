import NavLinkLI from "./NavLinkLI";

/**
 * This function is responsible for rendering the home button in the header.
 * It creates an SVG icon for the home button and passes it to the NavLinkLI component.
 *
 * @returns {JSX.Element} - A JSX element representing the home button.
 */
export default function HeaderHomeButton() {
  const homeIcon = (
    <svg
      className="w-5 text-black-light cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  return <NavLinkLI text={homeIcon} to="/" />;
}
