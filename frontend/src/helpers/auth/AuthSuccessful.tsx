import { useNavigate } from 'react-router';

export default function AuthSuccessful(): void {
  const navigate = useNavigate();
  navigate('/');
}
