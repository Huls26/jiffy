import { auth, } from '@/lib/fb';
import { useReducer } from "react";

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

export default function usePostInteraction(userPost) {
  const currentUserId = auth.currentUser.uid;
  const isUserLiked = userPost?.likedUsers.includes(currentUserId);
  const initialState = { likeButton: isUserLiked, commentButton: false, likesCount: userPost?.likes || 0 };
  // TODO: clean this up

  const [buttonState, dispatch] = useReducer(reducerAction, initialState);

  return (
    { buttonState, dispatch, currentUserId }
  )
}
