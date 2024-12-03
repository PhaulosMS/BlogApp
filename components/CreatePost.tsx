'use client';
import React from 'react';
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
import { PostData } from '@/app/types/types';
import { createPost } from './services';
import mongoose from 'mongoose';

const CreatePost = () => {
  const form = useForm<PostData>({
    defaultValues: {
      Title: '',
      Content: '',
    },
  });

  const onSubmit = async (data: PostData) => {
    const response = await (
      await createPost({
        ...data,
        OwnerId: '674cd7a37f3a0037f916de71',
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

export default CreatePost;
