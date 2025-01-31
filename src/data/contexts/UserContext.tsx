'use client';

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

interface UserCotextProps {
  token: string;
  payload: usePayloadProps;
  signOut(): void;
}

interface usePayloadProps {
  userId: string;
  name: string;
  email: string;
  iat: string;
  exp: string;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as UserCotextProps);

export function UserProvider(props: UserProviderProps) {

  const [token, setToken] = useState<string>('');
  const [payload, setPayload] = useState<usePayloadProps>({} as usePayloadProps);

  function getPayload() {
    const user = window.localStorage.getItem('user');
    if (user) {
      const payload = user ? JSON.parse(user) : null;
      setPayload(payload.payload);
      setToken(payload.token);
    }
  }

  function signOut() {
    setTimeout(() => {
      window.localStorage.removeItem('user');
    }, 3000);
  }

  useEffect(() => {
    setTimeout(() => {
      getPayload();
    }, 3000);
  }, []);

  return (
    <UserContext.Provider value={{
      token,
      payload,
      signOut
    }}>
      {props.children}
    </UserContext.Provider>

  );

}

