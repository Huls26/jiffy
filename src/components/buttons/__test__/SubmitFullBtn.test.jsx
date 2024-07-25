import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for the "toBeInTheDocument" matcher
import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";

describe("SubmitFullButton Component", () => {
  test("renders the button with the correct text", () => {
    const buttonText = "Submit";

    render(<SubmitFullBtn text={buttonText} />);

    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  test("has the correct classes applied", () => {
    const buttonText = "Submit";

    render(<SubmitFullBtn text={buttonText} />);

    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toHaveClass(
      "w-full",
      "px-8",
      "py-3",
      "font-semibold",
      "rounded-md",
      "dark:text-gray-50",
      "dark:bg-blue-600",
      "hover:opacity-70",
      "active:opacity-55",
    );
  });

  test("has type 'button'", () => {
    const buttonText = "Submit";

    render(<SubmitFullBtn text={buttonText} />);

    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toHaveAttribute("type", "button");
  });
});
