// components/AuthForm.tsx
"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

// Validation schemas
const signUpSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  address: z.string().nonempty({ message: 'Address is required.' }),
  state: z.string().nonempty({ message: 'State is required.' }),
  postalCode: z.string().min(5, { message: 'Postal code must be at least 5 characters.' }),
  dob: z.string().nonempty({ message: 'Date of birth is required.' }),
  ssn: z.string().min(4, { message: 'SSN must be at least 4 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const SignInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

// Component Props
interface AuthFormProps {
  type: 'sign-up' | 'sign-in';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const form = useForm({
    resolver: zodResolver(type === 'sign-up' ? signUpSchema : SignInSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      postalCode: '',
      dob: '',
      ssn: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>
        <h2 className="text-2xl font-bold">{type === 'sign-up' ? 'Sign up' : 'Sign in'}</h2>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {type === 'sign-up' && (
            <>
              <div className="flex space-x-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className='form-message'/>
                  </FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className='form-message'/>
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="address" render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className='form-message'/>
                </FormItem>
              )} />
              <div className="flex space-x-4">
                <FormField control={form.control} name="state" render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className='form-message'/>
                  </FormItem>
                )} />
                <FormField control={form.control} name="postalCode" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className='form-message'/>
                  </FormItem>
                )} />
              </div>
              <div className="flex space-x-4">
                <FormField control={form.control} name="dob" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage className='form-message'/>
                  </FormItem>
                )} />
                <FormField control={form.control} name="ssn" render={({ field }) => (
                  <FormItem>
                    <FormLabel>SSN</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className='form-message'/>
                  </FormItem>
                )} />
              </div>
            </>
          )}
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage className='form-message'/>
            </FormItem>
          )} />
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage className='form-message'/>
            </FormItem>
          )} />
          <Button type="submit" className="form-btn w-full">
            {type === 'sign-up' ? 'Sign up' : 'Sign in'}
          </Button>
        </form>
      </Form>
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
        </p>
        <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
          {type === 'sign-in' ? 'Sign up' : 'Sign in'}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
