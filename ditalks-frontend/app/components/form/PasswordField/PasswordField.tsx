import React, { useState } from 'react';

interface PasswordFieldProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {

}

const PasswordField: React.FC<PasswordFieldProps> = (props) => {
  const [show, setShow] = useState(false);

  const {
    disabled,
    ...rest
  } = props;

  return (
    <div className="relative">
      <input
        {...rest}
        className="text-field"
        type={show ? "text" : "password"}
      />
      {show ? (
        <button onClick={() => setShow(false)}>
          <img
            className="w-5 h-5 absolute top-2 right-2"
            src="images/icons/eye-slash-solid.svg"
          />
        </button>
      ) : (
        <button onClick={() => setShow(true)}>
          <img
            className="w-5 h-5 absolute top-2 right-2"
            src="images/icons/eye-solid.svg"
          />
        </button>
      )}
    </div>
  );
}

export default PasswordField;