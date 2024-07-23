import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputLabelContainer from "@/components/componentContainers/InputLabelContainer";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import handleChange from "@/utils/handleChange";
import { vi } from "vitest";

// Mock the handleChange function
vi.mock("@/utils/handleChange", () => ({
  default: vi.fn(),
}));

// Mock context provider
const mockDispatch = vi.fn();
const mockState = {
  email: "",
};
const mockContextValue = [mockState, mockDispatch];

describe.skip("InputLabelContainer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the label and input field", () => {
    // Arrange
    render(
      <reducerContext.Provider value={mockContextValue}>
        <InputLabelContainer
          label="Email"
          type="email"
          name="email"
          id="email"
          dispatchType="SET_EMAIL"
          autoComplete="email"
          placeholder="Enter your email"
        />
      </reducerContext.Provider>,
    );

    // Assert
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();
  });

  it("calls handleChange when the input value changes", () => {
    // Arrange
    const { default: mockedHandleChange } = handleChange;
    render(
      <reducerContext.Provider value={mockedHandleChange}>
        <InputLabelContainer
          label="Email"
          type="email"
          name="email"
          id="email"
          dispatchType="SET_EMAIL"
          autoComplete="email"
          placeholder="Enter your email"
        />
      </reducerContext.Provider>,
    );

    // Act
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: "test@example.com" },
    });

    // Assert
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith(
      expect.any(Object), // the event object
      mockDispatch,
      "SET_EMAIL",
    );
  });
});
