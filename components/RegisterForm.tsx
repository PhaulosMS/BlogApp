'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createUser } from '../services';
import { SignupData, signUpSchema } from '@/types/types';

const RegisterForm = () => {
  const form = useForm<SignupData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      Email: '',
      Username: '',
      Password: '',
      ConfirmPassword: '',
    },
  });

  const onSubmit = async (data: SignupData) => {
    try {
      const response = await (await createUser(data)).json();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg w-full flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          {...form.register('Email')}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Email Address" type="email" />
              </FormControl>
              <FormMessage className="text-bold text-red-600" />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          {...form.register('Username')}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Username" type="text" />
              </FormControl>
              <FormMessage className="text-bold text-red-600" />
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          {...form.register('Password')}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Password" type="password" />
              </FormControl>
              <FormMessage className="text-bold text-red-600" />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          {...form.register('ConfirmPassword')}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="ConfirmPassword"
                  type="password"
                />
              </FormControl>
              <FormMessage className="text-bold text-red-600" />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit" className="w-full ">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
