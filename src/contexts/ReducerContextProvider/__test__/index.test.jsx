import { act, render } from "@testing-library/react";
import { useContext } from "react";
import "@testing-library/jest-dom";
import {
	default as ReducerContextProvider,
	reducerContext,
} from "@/contexts/ReducerContextProvider";

// Mock reducer function
const mockReducer = (state, action) => {
	switch (action.type) {
		case "TEST_ACTION":
			return { ...state, test: action.payload };
		default:
			return state;
	}
};

// Initial state for the context
const initialState = { test: "initial" };

// Test component that uses the context
const TestComponent = () => {
	const [state, dispatch] = useContext(reducerContext);

	return (
		<div>
			<span data-testid="state">{state.test}</span>
			<button
				type="button"
				onClick={() => dispatch({ type: "TEST_ACTION", payload: "updated" })}
			>
				Dispatch
			</button>
		</div>
	);
};

/**
 * This test case verifies that the ReducerContextProvider component provides the correct state and dispatch function to its children.
 *
 * @returns {React.FC} - A test case function that renders the ReducerContextProvider with a TestComponent and checks the state and dispatch functionality.
 */
describe("ReducerContextProvider", () => {
	it("provides state and dispatch function to its children", () => {
		const { getByTestId, getByText } = render(
			<ReducerContextProvider
				reducerMethod={mockReducer}
				INITIAL_STATE={initialState}
			>
				<TestComponent />
			</ReducerContextProvider>,
		);

		// Check the initial state
		// Expect the state to be "initial" when the component is rendered.
		expect(getByTestId("state")).toHaveTextContent("initial");

		// Use act to wrap state updates
		// Simulate a click event on the "Dispatch" button to trigger the TEST_ACTION.
		act(() => {
			getByText("Dispatch").click();
		});

		// Check the updated state
		// Expect the state to be "updated" after the TEST_ACTION is dispatched.
		expect(getByTestId("state")).toHaveTextContent("updated");
	});
});
