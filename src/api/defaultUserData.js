export default function defaultUserData(formData) {
  const defaultUserImage = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=740&t=st=1688796331~exp=1688796931~hmac=a892b8ed0f19fd1c95171c93cdb4a0b94ec58ca1972d594ca36db1d7ed265279';
  const defaultUserBanner = 'https://i.pinimg.com/originals/4f/de/0e/4fde0ed05a14d7f6c1a0b19daec5a731.jpg';
  const defaultData = {
    userImg: defaultUserImage,
    userBanner: defaultUserBanner,
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    followers: 0,
    posts: [],
    totalPosts: 0,
    description: "No such thing in life that's better than yours",
  };

  console.log(formData.entries(), defaultData);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>{defaultUserImage}</div>
  );
}
