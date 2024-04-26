/* eslint-disable no-shadow */
import {
  describe, test, expect, vi,
} from 'vitest';
import getFirestoreData from '../getFirestoreData';
import { db } from '@/api/FB';

vi.mock('@/api/FB', async (importOriginal) => {
  const mockCollection = vi.fn().mockReturnValue({
    where: vi.fn().mockReturnValue({
      orderBy: vi.fn().mockReturnValue({
        get: vi.fn().mockResolvedValue({
          docs: [{
            id: '1',
            data: () => ({
              title: 'Hello World!',
              body: 'This is the body',
              createdAt: 1623587200000,
            }),
          }],
        }),
      }),
    }),
  });

  const mockDb = {
    collection: mockCollection,
    where: vi.fn().mockReturnValue({
      orderBy: vi.fn().mockReturnValue({
        get: vi.fn().mockResolvedValue({
          docs: [{
            id: '1',
            data: () => ({
              title: 'Hello World!',
              body: 'This is the body',
              createdAt: 1623587200000,
            }),
          }],
        }),
      }),
    }),
    query: vi.fn(),
    posts: 'posts',
    orderBy: vi.fn(),
  };

  const mod = await importOriginal();
  return {
    ...mod,
    db: mockDb,
  };
});

describe.skip('getFirestoreData', () => {
  test('should test the functionality of the getFirestoreData function', async () => {
    // Arrange
    const mockCallback = vi.fn((args) => {
      const {
        query, collection, db, posts, where, orderBy,
      } = args;
      const q = query(collection(db, posts), where('title', '==', 'Hello World!'), orderBy('createdAt', 'desc'));
      return q;
    });

    // Act
    const result = await getFirestoreData(mockCallback);

    // Assert
    expect(result).toBeDefined();
    expect(mockCallback).toHaveBeenCalled();
  });

  test('should test the correctness of the callback argument passed to the function', () => {
    // Arrange
    const mockCallback = vi.fn((args) => {
      const {
        query, collection, db, posts, where, orderBy,
      } = args;
      const q = query(collection(db, posts), where('title', '==', 'Hello World!'), orderBy('createdAt', 'desc'));
      return q;
    });

    // Act
    const result = getFirestoreData(mockCallback);

    // Assert
    expect(result).toBeDefined();
    expect(mockCallback).toHaveBeenCalledWith({
      query: db.query,
      collection: db.collection,
      db,
      posts: 'posts',
      where: db.where,
      orderBy: db.orderBy,
    });
  });

  test('should test the correctness of the q variable created inside the function', () => {
    // Arrange
    const mockCallback = vi.fn((args) => {
      const {
        query, collection, db, posts, where, orderBy,
      } = args;
      const q = query(collection(db, posts), where('title', '==', 'Hello World!'), orderBy('createdAt', 'desc'));
      return q;
    });

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
    const mockCallback = vi.fn((args) => {
      const {
        query, collection, db, posts, where, orderBy,
      } = args;
      const q = query(collection(db, posts), where('title', '==', 'Hello World!'), orderBy('createdAt', 'desc'));
      return q;
    });

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
