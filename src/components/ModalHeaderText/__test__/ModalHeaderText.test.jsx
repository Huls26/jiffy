import ModalHeaderText from "@/components/ModalHeaderText"; // Adjust the import path as needed
import { render, screen } from "@testing-library/react";

describe("ModalHeaderText", () => {
  test("renders the title and body correctly", () => {
    const title = "Test Title";
    const body = "This is the body text.";

    render(<ModalHeaderText title={title} body={body} />);

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("my-3 text-4xl font-bold");

    // Check if the body is rendered correctly
    const bodyElement = screen.getByText(body);
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass("text-sm dark:text-gray-600");
  });
});
