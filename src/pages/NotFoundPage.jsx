import usePageTitle from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  // The NotFoundPage component renders a 404 error page with a link to the homepage.
  // It also sets the page title to "Not Found!".
  usePageTitle("Not Found!");

  return (
    <section className="flex items-center h-full p-16 bg-transparent dark:text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="w-screen md:max-w-md text-center">
          <h2 className="mb-3 md:mb-8 font-extrabold text-5xl md:text-9xl dark:text-gray-50">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-md md:text-xl dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-5 py-2 text-sm md:text-base md:px-8 md:py-3 font-semibold rounded dark:bg-blue-600 dark:text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
