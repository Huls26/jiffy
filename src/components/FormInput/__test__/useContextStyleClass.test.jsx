import { fireEvent, render, screen } from "@testing-library/react";
import { auth } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock Firebase auth and dispatch
vi.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: vi.fn(),
}));

// Mock dispatch and navigate
const mockDispatch = vi.fn();
const mockNavigate = vi.fn();

function handleSubmit(event) {
  event.preventDefault();

  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Signed in
      dispatch({ type: "UPDATE_VALIDAUTH" });
      navigate("/");
    } catch (error) {
      dispatch({ type: "UPDATE_INVALIDAUTH" });
    }
  }

  signIn(email, password);
}

// Example component that uses handleSubmit
function TestComponent() {
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

describe.skip("handleSubmit", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mocks before each test
  });

  it("should call signIn with correct arguments and navigate on success", async () => {
    // Setup mock response
    signInWithEmailAndPassword.mockResolvedValueOnce({ user: {} });

    render(<TestComponent />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Submit"));

    // Verify signIn function was called with correct arguments
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      auth, // Replace with actual auth object
      "test@example.com",
      "password123",
    );

    // Verify dispatch and navigate were called
    expect(mockDispatch).toHaveBeenCalledWith({ type: "UPDATE_VALIDAUTH" });
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should dispatch UPDATE_INVALIDAUTH on failure", async () => {
    // Setup mock to reject with an error
    signInWithEmailAndPassword.mockRejectedValueOnce(
      new Error("Failed to sign in"),
    );

    render(<TestComponent />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Submit"));

    // Verify signIn function was called with correct arguments
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      auth, // Replace with actual auth object
      "test@example.com",
      "password123",
    );

    // Verify dispatch was called with the invalid auth action
    expect(mockDispatch).toHaveBeenCalledWith({ type: "UPDATE_INVALIDAUTH" });
  });
});
