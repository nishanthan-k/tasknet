import React from 'react';
import { FormInputProps } from '../types/formInput.types';

const FormInput: React.FC<FormInputProps> = ({ type = 'text', name, error, register, ...rest }) => {
  return (
    <div>
      <input
        className='w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500'
        type={type}
        {...(register ? register(name) : {})}
        {...rest}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default FormInput;
