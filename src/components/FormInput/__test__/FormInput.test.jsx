import LoginFormInput from "@/components/FormInput";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

describe("LoginFormInput", () => {
  test("renders the input field with the correct attributes", () => {
    const type = "text";
    const name = "username";
    const id = "username";
    const value = "testuser";
    const onChange = vi.fn();
    const autoComplete = "username";
    const placeholder = "Enter your username";

    render(
      <LoginFormInput
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />,
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", type);
    expect(inputElement).toHaveAttribute("name", name);
    expect(inputElement).toHaveAttribute("id", id);
    expect(inputElement).toHaveAttribute("value", value);
    expect(inputElement).toHaveAttribute("autoComplete", autoComplete);
    expect(inputElement).toHaveClass(
      "w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-blue-500",
    );
  });

  test("calls onChange handler when input value changes", () => {
    const type = "text";
    const name = "username";
    const id = "username";
    const value = "testuser";
    const onChange = vi.fn();
    const placeholder = "Enter your username";

    render(
      <LoginFormInput
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />,
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    fireEvent.change(inputElement, { target: { value: "newuser" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
