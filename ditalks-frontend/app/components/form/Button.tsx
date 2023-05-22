import React, { ReactNode } from 'react';
import Loading from '../common/Loading';

interface ButtonProps {
  loading?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit"
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (
  { children, loading = false, className, onClick, type = "button" }
) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={"px-6 py-2 text-white bg-black rounded-full hover:shadow-md shadow-sm transition active:opacity-90 " + className}
    >
      {!loading && children}
      {loading && <Loading />}
    </button>
  );
}

export default Button;