import React from 'react';
import Modal from '../common/Modal/Modal';
import ModalTitle from '../common/Modal/ModalTitle';
import { TextField } from '../form/TextField/TextField';
import InputGroup from '../form/InputGroup/InputGroup';
import { Lora } from 'next/font/google'
import Button from '../form/Button';
import PasswordField from '../form/PasswordField/PasswordField';
const font = Lora({ subsets: ['latin'] })

interface SignInModalProps {
  show: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <ModalTitle>Welcome back!</ModalTitle>

      <div>
        <div className="flex flex-col gap-4">
          <InputGroup label="Email" htmlFor="email">
            <TextField
              id="email"
              placeholder="example@example.com"
            />
          </InputGroup>
          <InputGroup label="Password" htmlFor="password">
            <PasswordField
              id="password"
              type="password"
              placeholder="hFg4093%67%m"
            />
          </InputGroup>
        </div>

        <Button onClick={() => console.log('loading ...')} className="font-bold w-full mt-6 bg-secundary">
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

      </div>

    </Modal>
  );
}

export default SignInModal;