import publishBtnStyle from '../../styles/publishBtnStyle';
import usePostUpload from '../../hooks/createPostModal/usePostUpload';

/**
 * This file contains the MainPagePublishButton component, which is responsible for the publish button on the main page of the Jiffy app.
 * The component uses the 'usePostUpload' hook to manage the post content and image file.
 * The button is disabled if either the post content or image file is missing.
 * When clicked, it triggers the 'publishContent' function to upload the post.
 *
 * Imported Components and Hooks:
 * - publishBtnStyle: A style object for the publish button.
 * - usePostUpload: A custom hook to manage the post upload process.
 *
 * Components:
 * - MainPagePublishButton: The publish button component.
 *
 * Props:
 * - None
 *
 * State:
 * - postContentText: The text content of the post.
 * - imageFile: The image file associated with the post.
 * - publishContent: A function to upload the post.
 *
 * @returns {JSX.Element} - The publish button component.
 */
export default function MainPagePublishButton() {
  const { postContentText, imageFile, publishContent } = usePostUpload();

  return (
    <button
      type="button"
      className={publishBtnStyle(imageFile && postContentText)}
      onClick={publishContent}
      disabled={!imageFile || !postContentText}
    >
      Publish
    </button>
  )
}
