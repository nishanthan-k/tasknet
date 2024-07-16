import React from 'react';

type InputProps = {
  type: string,
  id: string,
  value: string,
  error?: string,
  onChange: () => void
}

export default function Input(props: InputProps): ReturnType<React.FC> {
  const {type, value, onChange} = props;
  return (
    <input
      className='text-black font-form'
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
