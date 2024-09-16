export default function DefaultUserProfile() {
  return (
    <div className="relative w-5 h-5 md:w-7 md:h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
      <svg
        className="absolute w-7 h-6 md:w-9 md:h-8 text-gray-400 -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
