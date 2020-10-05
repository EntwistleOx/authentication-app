import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from '../firebase/client';
import { useRouter } from 'next/router';
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, [setUser]);

  // useEffect(() => {
  //   user === null && router.push('/');
  // }, [user]);

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserProvider;
