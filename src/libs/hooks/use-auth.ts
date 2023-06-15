import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const useAuth = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return { session };
};

export default useAuth;
