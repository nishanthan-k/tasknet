import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string,
  value?: string | number | readonly string[],
  placeholder?: string,
  name: string;
  label?: string;
  error?: string;
  register?: UseFormRegister<any>,
  className?: string,
}