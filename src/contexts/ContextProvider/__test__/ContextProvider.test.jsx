import {
  Context,
  default as ContextProvider,
} from "@/contexts/ContextProvider";
import { render } from "@testing-library/react";
import React from "react";

describe("ContextProvider", () => {
  it("should provide the context value to its children", () => {
    const testValue = "testValue";
    const ChildComponent = () => {
      const value = React.useContext(Context);
      return <div>{value}</div>;
    };

    const { getByText } = render(
      <ContextProvider value={testValue}>
        <ChildComponent />
      </ContextProvider>,
    );

    expect(getByText(testValue)).toBeInTheDocument();
  });
});
