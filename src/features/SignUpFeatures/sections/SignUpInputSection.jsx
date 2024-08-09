import InputLabelContainer from "@/components/componentContainers/InputLabelContainer";

export default function SignUpInputSection() {
  return (
    <section className="space-y-4">
      <InputLabelContainer
        ariaLabel="Enter email address"
        label="Email address"
        type="email"
        name="email"
        id="email"
        dispatchType="UPDATE_EMAIL"
        autoComplete="username"
        placeholder="aquino@mail.com"
      />
      <InputLabelContainer
        ariaLabel="Enter username"
        label="Username"
        type="text"
        name="username"
        id="username"
        dispatchType="UPDATE_USERNAME"
        autoComplete="username"
        placeholder="Kiki Aquino"
      />
      <InputLabelContainer
        ariaLabel="Enter password"
        label="Password"
        type="password"
        name="password"
        id="password"
        dispatchType="UPDATE_PASSWORD"
        autoComplete="new-password"
        placeholder="********"
      />
      <InputLabelContainer
        ariaLabel="confirm password"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        dispatchType="UPDATE_CONFIRM_PASSWORD"
        autoComplete="new-password"
        placeholder="********"
      />
    </section>
  );
}
