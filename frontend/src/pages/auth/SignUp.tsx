import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { SignUpApi } from '../../services/auth/Auth.service';
import useLocalStorage from '../../hooks/ls/useLocalStorage';
import { useSetRecoilState } from 'recoil';
import { UserAtom } from '../../store/atoms/auth/Auth.atom';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must have 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords much match',
  path: ['confirmPassword']
});


export default function SignUp(): JSX.Element {
  const navigate = useNavigate();
  const setUserAtom = useSetRecoilState(UserAtom);
  const { setLocalStorage } = useLocalStorage();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({resolver: zodResolver(signupSchema),
    defaultValues: {
      email: 'n@gmail.com',
      password: 'nmnmnm',
      confirmPassword: 'nmnmnm',
    }
  });
  
  const onSubmit = handleSubmit(async (data: FieldValues) => {
    const { email, password } = data;
    const response = await SignUpApi({ email, password });

    if (response.status) {
      setUserAtom({email});
      setLocalStorage('user', {email});
      navigate('/');
    }
  });

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <form 
        noValidate
        className="max-w-md w-5/6 text-black flex flex-col justify-center items-center gap-4"
        onSubmit={onSubmit}
      >
        <div className='w-full'>
          <input
            className='w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500'
            type="email"
            id="email"
            placeholder='Email'
            {...register('email', { required: 'Email is required' })}
          />
          {errors?.email && <p className='text-red-500'>{`${errors?.email.message}`}</p>}
        </div>
        
        <div className='w-full'>
          <input
            className='w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500'
            type="password"
            id="password"
            placeholder='Password'
            {...register('password', { required: 'Password is required' })}
          />
          {errors?.password && <p className='text-red-500'>{`${errors?.password.message}`}</p>}
        </div>
        
        <div className='w-full'>
          <input
            className='w-full rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500'
            type="password"
            id="confirmPassword"
            placeholder='Confirm Password'
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
            })}
          />
          {errors?.confirmPassword && (
            <p className='text-red-500'>{`${errors?.confirmPassword.message}`}</p>
          )}
        </div>

        <button
          type='submit'
          className={`text-gray-200 w-full h-10 rounded-md ${isSubmitting ? 'bg-sky-900' : 'bg-sky-600'}`}
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
