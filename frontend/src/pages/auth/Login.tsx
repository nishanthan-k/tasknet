import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import FormInput from '../../globals/form/FormInput';
import { AuthFormDataType } from '../../globals/types/form.types';
import useAuthSuccessful from '../../hooks/auth/useAuth.hook';
import { LoginApi } from '../../services/auth/Auth.service';

const LoginSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(6, 'Password must have 6 characters'),
});

export default function Login(): JSX.Element {
  const handleAuthSuccess = useAuthSuccessful();
  const { 
    handleSubmit, register, formState: { errors, isSubmitting } 
  } = useForm({ 
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'n@gmail.com',
      password: 'nmnmnm',
    }
  });

  const onSubmit = handleSubmit(async (data: AuthFormDataType) => {
    const { email } = data;
    const res = await LoginApi(data);

    if (res.status) {
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
            name='email'
            type='email'
            placeholder='email'
            register={register}
            error={errors.email?.message}
          />
        </div>

        <div className='w-full'>
          <FormInput
            name='password'
            type='password'
            placeholder='password'
            register={register}
            error={errors.password?.message}
          />
        </div>
        
        <button
          type='submit'
          className={`text-gray-200 w-full h-10 rounded-md ${isSubmitting ? 'bg-sky-900' : 'bg-sky-600'}`}
          disabled={isSubmitting}
        >
          Login
        </button>
      </form>
    </div>
  );
}
