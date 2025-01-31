'use client';

import { useLocalStorage } from "@/data/hooks/useLocalStorage";
import { baseUrl } from "@/utils/url";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

type Payload = {
  token: string;
  accountPayload: {
    accountId: string;
    name: string;
    email: string
  }
}

interface AuthContextProps {
  account: Payload;
  setUser: (user: Payload) => void;
  login(email: string, password: string): Promise<void>;
  signup(name: string, email: string, password: string, logo: string): Promise<void>;
  signOut(): void;
  message: string;
  status: boolean;
  active: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider(props: AuthProviderProps) {

  const [account, setAccount] = useState<Payload>({} as Payload);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const router = useRouter();
  const { get, set, remove } = useLocalStorage();
  const apiUrl = baseUrl;

  function redirect(url: string, time: number) {
    setTimeout(() => {
      router.push('/');
    }, time);
  }

  function handleActiveMessage() {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 7000);
  }

  async function login(email: string, password: string) {
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();
      if (data.statusCode === 500) {
        setMessage(data.message);
        setStatus(response.ok);
        handleActiveMessage();
        return;
      }
      if (response.ok) {
        set('car-payload', data);
        setAccount(data);
      }
      setMessage(data.message);
      setStatus(response.ok);
      handleActiveMessage();
      redirect('/', 5000);
    } catch (error) {
      console.log(error);
    }
  }

  async function signup(name: string, email: string, password: string, logo: string) {
    try {
      const response = await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          logo
        })
      });
      const data = await response.json();

      if (data.statusCode === 500) {
        setMessage(data.message);
        setStatus(response.ok);
        handleActiveMessage();
        return;
      }
      setMessage(data.message);
      setStatus(response.ok);
      handleActiveMessage();
      redirect('/login', 5000);
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {
    remove('car-payload');
    setAccount({} as any);
    redirect('/', 1000);
  }

  useEffect(() => {
    const payload = get('car-payload');
    if (payload) {
      setAccount(payload);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      account,
      setUser: setAccount,
      login,
      signup,
      signOut,
      message,
      status,
      active
    }}>
      {props.children}
    </AuthContext.Provider>

  );

}

export {
  AuthContext,
  AuthProvider
}

