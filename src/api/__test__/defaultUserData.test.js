import { describe, test, expect } from 'vitest';
import defaultUserData from '../defaultUserData';

describe('defaultUserData', () => {
  test('returns the default user data', () => {
    const formData = new FormData();
    formData.set('firstname', 'John');
    formData.set('lastname', 'Doe');
    formData.set('username', 'johndoe');
    formData.set('email', '<EMAIL>');
    formData.set('month', '01');
    formData.set('date', '01');
    formData.set('year', '1990');

    const expectedData = {
      userImg: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=740&t=st=1688796331~exp=1688796931~hmac=a892b8ed0f19fd1c95171c93cdb4a0b94ec58ca1972d594ca36db1d7ed265279',
      userBanner: 'https://i.pinimg.com/originals/4f/de/0e/4fde0ed05a14d7f6c1a0b19daec5a731.jpg',
      firstname: 'John',
      lastname: 'Doe',
      username: 'johndoe',
      email: '<EMAIL>',
      month: '01',
      date: '01',
      year: '1990',
      followers: 0,
      peopleFollows: [],
      posts: [],
      totalPosts: 0,
      description: "No such thing in life that's better than yours",
    };

    const actualData = defaultUserData(formData);

    expect(actualData).toEqual(expectedData);
  });
});
