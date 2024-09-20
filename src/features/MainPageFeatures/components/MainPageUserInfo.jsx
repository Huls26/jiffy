import useAuthListener from "@/hooks/useAuthListener";

export default function MainPageUserInfo() {
  const { email, username, photoURL } = useAuthListener();

  return (
    <section className="p-1 pl-2 flex">
      <div className="grid place-self-center mr-2">
        <img
          className="w-8 rounded-full"
          src={photoURL}
          alt={`${username} user profile`}
        />
      </div>
      <div className="text-left -space-y-1">
        <h2 className="text-sky-400 font-semibold">{username}</h2>
        <p className="font-mono text-xs text-gray-300">{email}</p>
      </div>
    </section>
  );
}
