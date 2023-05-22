'use client'

import React from 'react';
import Button from '../form/Button';
import { useForm } from 'react-hook-form';
import Modal from '../common/Modal/Modal';
import InputError from '../form/InputError';
import { SignInForm } from '@/app/interfaces/auth';
import ModalTitle from '../common/Modal/ModalTitle';
import { yupResolver } from '@hookform/resolvers/yup';
import InputGroup from '../form/InputGroup/InputGroup';
import { TextField } from '../form/TextField/TextField';
import { SignInSchema } from '@/app/schema/auth/SignInSchema';
import PasswordField from '../form/PasswordField/PasswordField';

interface SignInModalProps {
  show: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ show, onClose }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(SignInSchema),
  })

  const onSubmitSignIn = (values: SignInForm) => {
    console.log('values', values);
  }

  return (
    <Modal show={show} onClose={onClose}>
      <ModalTitle>Welcome back!</ModalTitle>
      <form onSubmit={handleSubmit(onSubmitSignIn)}>
        <div className="flex flex-col gap-4">
          <InputGroup label="Email" htmlFor="email">
            <TextField
              id="email"
              placeholder="example@example.com"
              hasError={!!errors.email?.message}
              {...register('email')}
            />
            <InputError error={errors.email?.message}/>
          </InputGroup>
          <InputGroup label="Password" htmlFor="password">
            <PasswordField
              id="password"
              type="password"
              hasError={!!errors.password?.message}
              placeholder="hFg4093%67%m"
              {...register('password')}
            />
            <InputError error={errors.password?.message}/>
          </InputGroup>
        </div>
        <Button
          type="submit"
          className="font-bold w-full mt-6 bg-secundary"
        >
          Sign In
        </Button>
        <button className="border-[2px] border-black-opacity-10 rounded-full px-6 py-2 w-full mt-4 font-bold flex gap-3 items-center justify-center">
          <img
            src="images/icons/google.svg"
            alt="google icon"
            className="w-5 h-5"
          />
          <p>Sign in with Google</p>
        </button>
        <p className="text-sm mt-8 text-center">
          No have an account? <a href="/" className="text-secundary">Sign up</a>
        </p>
      </form>
    </Modal>
  );
}

export default SignInModal;