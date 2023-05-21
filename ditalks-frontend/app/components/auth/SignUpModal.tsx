import React from 'react';
import Modal from '../common/Modal/Modal';
import ModalTitle from '../common/Modal/ModalTitle';
import { TextField } from '../form/TextField/TextField';
import InputGroup from '../form/InputGroup/InputGroup';
import { Lora } from 'next/font/google'
import Button from '../form/Button';
import PasswordField from '../form/PasswordField/PasswordField';

const font = Lora({ subsets: ['latin'] })

interface SignUpModalProps {
  show: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <ModalTitle>Register your account</ModalTitle>

      <div>
        <div className="flex flex-col gap-4">
          <InputGroup label="Nick name" htmlFor="username">
            <TextField
              id="username"
              placeholder="Jhon Due"
            />
          </InputGroup>
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
          Register
        </Button>
        
        <button className="border-[2px] border-black-opacity-10 rounded-full px-6 py-2 w-full mt-4 font-bold flex gap-3 items-center justify-center">
          <img
            src="images/icons/google.svg"
            alt="google icon"
            className="w-5 h-5"
          />
          <p>Sign up with Google</p>
        </button>


        <p className="text-sm mt-8 text-center">
          Have an account? <a href="/" className="text-secundary">Sign In</a>
        </p>

      </div>

    </Modal>
  );
}

export default SignUpModal;