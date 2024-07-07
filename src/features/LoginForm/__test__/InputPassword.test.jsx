import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import { LoginContext } from "@/pages/LoginPage";
import InputPassword from "../components/InputPassword";

describe("InputPassword Component", () => {
  it("should render the input field with the correct initial value and handle change event", () => {
    const mockDispatch = vi.fn();
    const initialState = { password: "initialPassword" };

    render(
      <LoginContext.Provider value={[initialState, mockDispatch]}>
        <InputPassword />
      </LoginContext.Provider>,
    );

    const input = screen.getByPlaceholderText("*****");

    // Check if the input field is rendered with the correct initial value
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(initialState.password);

    // Simulate user typing a new password
    fireEvent.change(input, { target: { value: "newPassword" } });

    // Check if dispatch is called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_PASSWORD",
      payload: "newPassword",
    });
  });
});
