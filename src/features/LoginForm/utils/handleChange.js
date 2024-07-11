/**
 * This function handles changes in an input field and dispatches an action to update the state.
 *
 * @param {Event} event - The event object representing the change in the input field.
 * @param {Function} dispatch - The dispatch function from the context, used to send actions.
 * @param {string} dispatchType - The type of action to be dispatched.
 *
 * @returns {void} This function does not return any value.
 */

export default function handleChange(event, dispatch, dispatchType) {
  dispatch({
    type: dispatchType,
    payload: `${event.target.value}`,
  });
}
