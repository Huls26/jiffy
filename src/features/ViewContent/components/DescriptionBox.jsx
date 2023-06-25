/* eslint-disable react/jsx-curly-brace-presence */
export default function DescriptionBox() {
  return (
    <section className="
                  border-dark-2 border border-b-2 border-r-2
                    px-3 pt-3 pb-4
                    mx-3 mb-4
                    rounded-lg
                    leading-none
                    text-gray-dark font-A
                  "
    >
      <p className="font-bold mb-4">Jan 10, 2023</p>

      <p className="font-semibold">
        Post description
        {
        // eslint-disable-next-line quotes
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, architecto error. Mollitia nam voluptate dolorem, ipsam minus totam sit ducimus saepe corporis. Eum blanditiis veniam deserunt? Quisquam fugiat quia aut!"
        }
        &apos;&apos;&apos;add more button&apos;&apos;
      </p>
    </section>
  );
}
