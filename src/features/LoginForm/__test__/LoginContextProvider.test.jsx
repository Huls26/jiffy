import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom"; // for the "toBeInTheDocument" matcher
import LoginContextProvider, {
  loginContext,
} from "../context/LoginContextProvider";

// Mock the useLoginContext hook
vi.mock("@/hooks/LoginPageHooks/useLoginContext", () => ({
  __esModule: true,
  default: vi.fn(),
}));

import useLoginContext from "@/hooks/LoginPageHooks/useLoginContext";

describe("LoginContextProvider", () => {
  it("provides login context to its children", () => {
    // Mock the return value of useLoginContext
    const mockState = { isLoggedIn: false };
    const mockDispatch = vi.fn();
    useLoginContext.mockReturnValue([mockState, mockDispatch]);

    // Create a test component that consumes the login context
    const TestComponent = () => {
      const [state, dispatch] = React.useContext(loginContext);
      return (
        <div>
          <span data-testid="login-status">{state.isLoggedIn.toString()}</span>
          <button type="button" onClick={() => dispatch({ type: "LOGIN" })}>
            Log In
          </button>
        </div>
      );
    };

    // Render the test component within the LoginContextProvider
    render(
      <LoginContextProvider>
        <TestComponent />
      </LoginContextProvider>,
    );

    // Assert that the context value is provided correctly
    expect(screen.getByTestId("login-status")).toHaveTextContent("false");
  });
});
