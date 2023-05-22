import React from 'react';

interface InputErrorProps {
  error: string | undefined;
}

const InputError: React.FC<InputErrorProps> = ({ error }) => {
  return (
    <>
      {error && <span className="text-error text-sm mt-1">{ error }</span>}
    </>
  );
}

export default InputError;