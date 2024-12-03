import { LoginData, PostData, SignupData } from '@/app/types/types';

const BASE_URL = process.env.API_BASE_URL;

export const createUser = async (data: SignupData) => {
  return await fetch(`/api/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const getUsers = async () => {
  return await fetch(`${BASE_URL}/api/users/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getUserById = async (id: string) => {
  return await fetch(`/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loginUser = async (data: LoginData) => {
  return await fetch(`/api/users/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const createPost = async (data: PostData) => {
  return await fetch(`/api/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const updatePost = async () => {};

export const getAllPosts = async () => {
  return await fetch(`${BASE_URL}/api/posts/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
