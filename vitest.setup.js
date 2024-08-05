import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

/**
 * Cleans up the DOM after each test case in a React application using Vitest.
 * This function is intended to be used as a part of the test setup.
 * It ensures that each test case starts with a clean and isolated DOM environment.
 *
 * @returns {void} This function does not return any value.
 *
 * @example
 * afterEach(() => {
 *   cleanup();
 * });
 */
afterEach(() => {
  cleanup();
});
