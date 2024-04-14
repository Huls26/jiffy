/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import { describe, test, expect } from 'vitest';
import { db } from '@/api/FB';
import getFirestoreData from '../getFirestoreData';

describe.skip('getFirestoreData', () => {
  test('should test the functionality of the getFirestoreData function', async () => {
    // Arrange
    const mockCallback = (args) => {
      const {
        query, collection, db, posts, where, orderBy,
      } = args;
      const q = query(collection(db, posts), where('title', '==', 'Hello World!'), orderBy('createdAt', 'desc'));
      return q;
    };

    // Act
    const result = await getFirestoreData(mockCallback);

    // Assert
    expect(result).toBeDefined();
    expect(mockCallback).toHaveBeenCalled();
  });

  test('should test the correctness of the callback argument passed to the function', () => {
    // Arrange
    const mockCallback = (args) => {
      const {
        query, collection, db, posts, where, orderBy,
      } = args;
      const q = query(collection(db, posts), where('title', '==', 'Hello World!'), orderBy('createdAt', 'desc'));
      return q;
    };

    // Act
    const result = getFirestoreData(mockCallback);

    // Assert
    expect(result).toBeDefined();
    expect(mockCallback).toHaveBeenCalledWith({
      query,
      collection,
      db,
      posts: 'posts',
      where,
      orderBy,
    });
  });

  test('should test the correctness of the q variable created inside the function', () => {
    // Arrange
    const mockCallback = (args) => {
      const {
        query, collection, db, posts, where, orderBy,
      } = args;
      const q = query(collection(db, posts), where('title', '==', 'Hello World!'), orderBy('createdAt', 'desc'));
      return q;
    };

    // Act
    const result = getFirestoreData(mockCallback);
    const q = result.docs;

    // Assert
    expect(q).toBeDefined();
    expect(q).toEqual([
      {
        id: '1',
        title: 'Hello World!',
        body: 'This is the body',
        createdAt: 1623587200000,
      },
    ]);
  });

  test('should test the correctness of the querySnapshot variable returned by the function', async () => {
    // Arrange
    const mockCallback = (args) => {
      const {
        query, collection, db, posts, where, orderBy,
      } = args;
      const q = query(collection(db, posts), where('title', '==', 'Hello World!'), orderBy('createdAt', 'desc'));
      return q;
    };

    // Act
    const result = await getFirestoreData(mockCallback);
    const querySnapshot = result;

    // Assert
    expect(querySnapshot).toBeDefined();
    expect(querySnapshot).toEqual([
      {
        id: '1',
        title: 'Hello World!',
        body: 'This is the body',
        createdAt: 1623587200000,
      },
    ]);
  });
});
