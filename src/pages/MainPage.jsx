import usePageTitle from "@/hooks/usePageTitle";

export default function MainPage() {
  usePageTitle("J I F F Y");

  return (
    <div>
      <h1 className="text-3xl font-bold underline m-3 text-blue-300">
        Hello world!
      </h1>
    </div>
  );
}
