import * as React from 'react';
import './TextField.css';

interface TextFieldProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {

}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    disabled,
    ...rest
  } = props;

  return (
    <input
      {...rest}
      className="text-field"
    />
  );
};