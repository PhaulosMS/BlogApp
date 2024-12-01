import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId: string) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  });

  const cookieSettings = {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, //7 days
    sameSite: 'strict' as boolean | 'strict' | 'lax' | 'none',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  };

  return { token, cookieSettings };
};

export default generateTokenAndSetCookie;
