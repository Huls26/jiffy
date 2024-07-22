import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // for better assertions
import LoginSignUpContainer from "../LoginSignUpContainer";

test("renders LoginSignUpContainer with children", () => {
  const { getByText } = render(
    <LoginSignUpContainer>
      <div>Test Child</div>
    </LoginSignUpContainer>,
  );

  expect(getByText("Test Child")).toBeInTheDocument();
});

test("has correct classes applied", () => {
  const { container } = render(
    <LoginSignUpContainer>
      <div>Test Child</div>
    </LoginSignUpContainer>,
  );

  const mainElement = container.querySelector("main");
  expect(mainElement).toHaveClass(
    "flex",
    "flex-col",
    "m-auto",
    "mt-10",
    "max-w-md",
    "p-10",
    "rounded-md",
    "sm:p-10",
    "dark:bg-gray-900",
    "dark:text-gray-100",
  );
});
