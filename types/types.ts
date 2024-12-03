import mongoose from 'mongoose';
import { z } from 'zod';

export const signUpSchema = z
  .object({
    Email: z.string().email(),
    Username: z
      .string()
      .min(3, 'Username too short must be above 3 letters')
      .max(15, 'Username max length is 15'),
    Password: z
      .string()
      .min(3, 'Password too short')
      .regex(/^[A-Za-z0-9!"£$%^&*€]+$/g),
    ConfirmPassword: z.string().regex(/^[A-Za-z0-9!"£$%^&*€]+$/g),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignupData = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  Username: z.string(),
  Password: z.string(),
});

export type LoginData = z.infer<typeof loginSchema>;

export type PostData = {
  OwnerId: string;
  Title: string;
  Content: string;
  createdAt: string;
  updatedAt: string;
};
