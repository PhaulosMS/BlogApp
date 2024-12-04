'use client';
import React, { useEffect } from 'react';
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
import { Textarea } from './ui/textarea';
import { PostData } from '@/types/types';
import { createPost } from '../services';
import { getCookie, decodeCookie } from '@/services/serverIndex';

const CreatePostForm = () => {
  const [userId, setUserId] = React.useState<string>('');
  const form = useForm<PostData>({
    defaultValues: {
      Title: '',
      Content: '',
    },
  });

  useEffect(() => {
    const fetchCookie = async () => {
      const cookie = await getCookie('token');
      if (cookie) {
        const decoded = await decodeCookie(cookie);
        if (decoded && 'userId' in decoded) {
          setUserId(decoded.userId);
        }
      }
    };
    fetchCookie();
  }, []);

  const onSubmit = async (data: PostData) => {
    const response = await (
      await createPost({
        ...data,
        OwnerId: userId,
      })
    ).json();
    if (response.ok) {
      console.log(response.message);
    } else {
      console.log(response.error);
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
          {...form.register('Title')}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Title" type="text" />
              </FormControl>
              <FormMessage className="text-bold text-red-600" />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          {...form.register('Content')}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea {...field} placeholder="Content" />
              </FormControl>
              <FormMessage className="text-bold text-red-600" />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">Create Post</Button>
      </form>
    </Form>
  );
};

export default CreatePostForm;
