'use server';

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

export const decodeCookie = async (cookie: RequestCookie) => {
  return jwt.verify(cookie.value, process.env.JWT_SECRET!) as jwt.JwtPayload;
};
