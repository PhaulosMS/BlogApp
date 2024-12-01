import { UserData } from '@/app/types/types';

export const createUser = async (data: UserData) => {
  return await fetch('/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const getUsers = async () => {
  return await fetch('/api/users/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loginUser = async () => {};

export const createPost = async () => {};

export const updatePost = async () => {};
