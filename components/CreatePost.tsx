'use client';
import React from 'react';
import { FieldValue, useForm } from 'react-hook-form';
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

const CreatePost = () => {
  const form = useForm<PostData>({
    defaultValues: {
      Title: '',
      Content: '',
    },
  });

  const onSubmit = (data: PostData) => {};

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
              <FormLabel>Title</FormLabel>
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
              <FormLabel>Content</FormLabel>
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
