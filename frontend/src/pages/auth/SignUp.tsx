import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import FormInput from '../../globals/form/FormInput';
import { AuthFormDataType } from '../../globals/types/form.types';
import useAuthSuccessful from '../../hooks/auth/useAuth.hook';
import { SignUpApi } from '../../services/auth/Auth.service';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must have 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords much match',
  path: ['confirmPassword']
});


export default function SignUp(): JSX.Element {
  const handleAuthSuccess = useAuthSuccessful();
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
  
  const onSubmit = handleSubmit(async (data: AuthFormDataType) => {
    const { email, password } = data;
    const response = await SignUpApi({ email, password });

    if (response.status) {
      handleAuthSuccess(email);
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
          <FormInput
            type='email'
            name="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email?.message}
          />
        </div>
        
        <div className='w-full'>
          <FormInput
            type='password'
            name='password'
            placeholder='Password'
            register={register}
            error={errors.password?.message}
          />
        </div>
        
        <div className='w-full'>
          <FormInput
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            register={register}
            error={errors.confirmPassword?.message}
          />
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
