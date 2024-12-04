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
import { PostData, postSchema } from '@/types/types';
import { createPost } from '../services';
import { getCookie, decodeCookie } from '@/services/serverIndex';
import { zodResolver } from '@hookform/resolvers/zod';

const CreatePostForm = () => {
  const [userId, setUserId] = React.useState<string>('e');
  const form = useForm<PostData>({
    resolver: zodResolver(postSchema),
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
        if (typeof decoded !== 'string' && 'userId' in decoded) {
          setUserId(decoded.userId);
        }
      }
    };
    fetchCookie();
  }, []);

  const onSubmit = async (data: PostData) => {
    const response = await createPost({ ...data, OwnerId: userId });
    const Data = await response.json();
    if (response.ok) {
      console.log(Data.message);
    } else {
      console.log(Data.error);
    }
    form.reset();
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
