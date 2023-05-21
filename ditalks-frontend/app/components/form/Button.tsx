import React, { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={"px-6 py-2 text-white bg-black rounded-full hover:shadow-md shadow-sm transition " + className}
    >
      { children }
    </button>
  );
}

export default Button;