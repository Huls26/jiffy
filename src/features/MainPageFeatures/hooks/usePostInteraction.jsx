import { auth, } from '@/lib/fb';
import { useMemo, useReducer } from "react";

/**
 * A reducer function that manages the state of the like and comment buttons.
 *
 * @param {Object} state - The current state of the button state.
 * @param {Object} state.likeButton - The current state of the like button (true if liked, false otherwise).
 * @param {Object} state.commentButton - The current state of the comment button (true if commented, false otherwise).
 * @param {Object} state.likesCount - The total number of likes for the post.
 * @param {Object} action - The action object that contains the type of action to be performed.
 * @param {string} action.type - The type of action to be performed ('LIKE_POST' or 'COMMENT_POST').
 *
 * @returns {Object} The new state of the button state after performing the action.
 * @returns {boolean} newButtonState.likeButton - The new state of the like button (true if liked, false otherwise).
 * @returns {boolean} newButtonState.commentButton - The new state of the comment button (true if commented, false otherwise).
 * @returns {number} newButtonState.likesCount - The new total number of likes for the post.
 */
function reducerAction(state, action) {
  switch (action.type) {
    case 'LIKE_POST':
      return {
        ...state,
        likeButton: !state.likeButton,
        likesCount: state.likesCount + (!state.likeButton ? 1 : -1),
      };
    case 'COMMENT_POST':
      return {
        ...state,
        commentButton: !state.commentButton,
      };
    default:
      return state;
  }
}

/**
 * A custom React hook that manages the interaction state of a post.
 * It handles like and comment actions, and initializes the state based on the user's post data.
 *
 * @param {Object} userPost - The user's post data.
 * @param {Array} userPost.likedUsers - An array of user IDs who have liked the post.
 * @param {number} userPost.likes - The total number of likes for the post.
 *
 * @returns {Object} An object containing the current button state, dispatch function, and the current user's ID.
 * @returns {Object.buttonState} buttonState - The current state of the like and comment buttons.
 * @returns {boolean} buttonState.likeButton - The state of the like button (true if liked, false otherwise).
 * @returns {boolean} buttonState.commentButton - The state of the comment button (true if commented, false otherwise).
 * @returns {number} buttonState.likesCount - The total number of likes for the post.
 * @returns {Function} dispatch - A function to dispatch actions to update the button state.
 * @returns {string} currentUserId - The current user's ID.
 */
export default function usePostInteraction(userPost) {
  const currentUserId = auth.currentUser.uid;
  // Memoize the initial state
  const initialState = useMemo(() => {
    const isUserLiked = userPost?.likedUsers.includes(currentUserId);
    return {
      likeButton: isUserLiked,
      commentButton: false,
      likesCount: userPost?.likes || 0,
    };
  }, [userPost, currentUserId]);

  const [buttonState, dispatch] = useReducer(reducerAction, initialState);

  return (
    { buttonState, dispatch, currentUserId }
  )
}
