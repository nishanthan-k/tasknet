import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { UserAtom } from '../../store/atoms/auth/Auth.atom';
import useLocalStorage from '../ls/useLocalStorage';

// Define the type for the email parameter
type AuthSuccessParams = string;

const useAuthSuccessful = (): ((params: AuthSuccessParams) => void) => {
  const setUserAtom = useSetRecoilState(UserAtom);
  const { setLocalStorage } = useLocalStorage();
  const navigate = useNavigate();

  const handleAuthSuccess = useCallback((email: AuthSuccessParams) => {
    setUserAtom({ email });
    setLocalStorage('user', { email });
    navigate('/');
  }, [setUserAtom, setLocalStorage, navigate]);

  return handleAuthSuccess;
};

export default useAuthSuccessful;
