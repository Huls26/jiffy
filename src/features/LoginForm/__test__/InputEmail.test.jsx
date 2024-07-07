import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import { LoginContext } from "@/pages/LoginPage";
import InputEmail from "../components/InputEmail";

describe("InputEmail Component", () => {
  it("should render the input field with the correct initial value and handle change event", () => {
    const mockDispatch = vi.fn();
    const initialState = { email: "test@example.com" };

    render(
      <LoginContext.Provider value={[initialState, mockDispatch]}>
        <InputEmail />
      </LoginContext.Provider>,
    );

    const input = screen.getByPlaceholderText("leroy@jenkins.com");

    // Check if the input field is rendered with the correct initial value
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(initialState.email);

    // Simulate user typing a new email
    fireEvent.change(input, { target: { value: "new@example.com" } });

    // Check if dispatch is called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_EMAIL",
      payload: "new@example.com",
    });
  });
});
