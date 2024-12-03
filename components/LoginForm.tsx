'use client';

import React from 'react';
import { useIsLoggedInStore } from '@/stores/loggedInStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { loginUser } from '../services';
import { LoginData, loginSchema } from '@/types/types';

const LoginForm = () => {
  const { setIsLoggedIn: setIsLoggedin } = useIsLoggedInStore();

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      Username: '',
      Password: '',
    },
  });

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await (await loginUser(data)).json();

      if (response.ok) {
        console.log(response.message);
        setIsLoggedin(true);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    // change globalstate to logged in need to add zustand or contextprovider
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg w-full flex flex-col gap-4"
      >
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
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};
export default LoginForm;
