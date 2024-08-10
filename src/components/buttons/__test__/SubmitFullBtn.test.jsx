import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for the "toBeInTheDocument" matcher
import SubmitFullBtn from "@/components/buttons/SubmitFullBtn";

// passed from my test suite
describe("SubmitFullButton", () => {
  it("should render the button with the correct text and default style", () => {
    render(<SubmitFullBtn text="Submit" />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full px-8 py-3 font-semibold rounded-md dark:text-gray-50 dark:bg-blue-600 hover:opacity-70 active:opacity-55",
    );
    expect(button).not.toBeDisabled();
  });

  it("should render the button as disabled and with invalid styles when isInvalid is true", () => {
    render(<SubmitFullBtn text="Submit" isInvalid />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full px-8 py-3 font-semibold rounded-md dark:text-gray-50 dark:bg-blue-600 opacity-70 cursor-not-allowed",
    );
    expect(button).toBeDisabled();
  });

  it("should render the button with the correct text and default style when isInvalid is false", () => {
    render(<SubmitFullBtn text="Submit" isInvalid={false} />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "w-full px-8 py-3 font-semibold rounded-md dark:text-gray-50 dark:bg-blue-600 hover:opacity-70 active:opacity-55",
    );
    expect(button).not.toBeDisabled();
  });
});
