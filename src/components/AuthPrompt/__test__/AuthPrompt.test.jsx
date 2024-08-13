import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for the "toBeInTheDocument" matcher
import AuthPrompt from "@/components/AuthPrompt";

describe.skip("AuthPrompt Component", () => {
  test("renders the AuthPrompt with required props", () => {
    const url = "https://example.com";
    const linkText = "Click here";

    render(<AuthPrompt url={url} linkText={linkText} />);

    const linkElement = screen.getByText(linkText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", url);
  });

  test("renders the AuthPrompt with an optional message", () => {
    const url = "https://example.com";
    const message = "Please visit";
    const linkText = "our site";

    render(<AuthPrompt url={url} message={message} linkText={linkText} />);

    const messageElement = screen.getByText(message);
    const linkElement = screen.getByText(linkText);
    expect(messageElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", url);
  });

  test("renders the AuthPrompt without optional props", () => {
    const url = "https://example.com";

    render(<AuthPrompt url={url} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", url);
  });
});
