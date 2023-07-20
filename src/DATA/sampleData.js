const UserData = {
  asd1230: {
    userImg: 'https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    userBanner: 'hasdfasdfSomethingUrl',
    username: 'John Lee',
    email: 'johnlee@email.com',
    followers: '90' || 90,
    posts: ['id1', 'id2', 'id3'],
    totalPosts: 3 || '3',
    description: 'something random text',
  },
};

console.log(UserData);

const postsContentData = {
  id1: {
    title: 'Hello world',
    content: 'url/helloworld',
    textContent: 'if content ? content : textContent',
    createdBy: 'ad1230',
    username: 'John Lee',
    description: 'random text short long it depends',
    likes: 12,
    peopleLikes: [],
    date: new Date(),
    comments: [
      'userCommentid1',
      {
        commentBy: 'userId' || 'username',
        commentsText: 'comment goes here',
        commentLike: 'optional',
      },
      {
        commentBy: 'userId' || 'username',
        commentsText: 'comment goes here',
        commentLike: 'optional',
      },
    ],
  },
};

console.log(postsContentData);

const photosData = {
  posts: {
    id1: {
      photoUrl: 'asdf',
      createdBy: 'ad1230',
    },
  },
  profile: {
    asd1230: {
      userProfile: 'https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      userBanner: 'somethinUrl',
    },
  },
};

console.log(photosData);
// data.id
