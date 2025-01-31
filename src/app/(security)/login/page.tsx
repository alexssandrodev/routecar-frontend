'use client';

import { FormEvent, useState } from "react";
import './login.css';

import { useRouter } from "next/navigation";
import { Message } from "@/components/Message";
import { IconKey, IconMailPin, IconShield } from "@tabler/icons-react";
import Image from "next/image";

function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [responseStatus, setResponseStatus] = useState<boolean>(false);
  const [activeMessage, setActiveMessage] = useState<boolean>(false);
  const secondMessage = responseStatus ? 'você está sendo redirecionado.' : '';


  function handleActiveMessage() {
    setActiveMessage(true);
    setTimeout(() => {
      setActiveMessage(false);
    }, 10000);
  }

  const router = useRouter();

  function redirect(time: number) {
    setTimeout(() => {
      router.push('/dashboard');
    }, time);
  }

  async function login(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      });
      const data = await response.json();
      handleActiveMessage();
      if (data.statusCode === 500) {
        setMessage(data.message);
        setResponseStatus(response.ok);
        return;
      }
      console.log('ok');
      setResponseStatus(response.ok);
      setMessage(data.message);
      window.localStorage.setItem('user', JSON.stringify(data.payload));
      redirect(5000);

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <section className="login__container">
      <Message message={message} optionalMessage={secondMessage} status={responseStatus} activeMessage={activeMessage} />
      <div className="box_login">
        <div className="login">
          <div className="security">
            <span><IconShield size={50} /></span>
          </div>
          <h2>Logar no sistema</h2>

          <form action="" method="post" onSubmit={login}>
            <label htmlFor="email">E-mail</label>
            <div className="input_login">
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="E-mail" />
              <span><IconMailPin /></span>
            </div>
            <label htmlFor="password">Senha</label>
            <div className="input_login">
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Senha" />
              <span><IconKey /></span>
            </div>
            <input className="btn_save" type="submit" value="Logar" />
          </form>
          <div className="lines">
            <div className="line_one"></div>
            <span>OR</span>
            <div className="line_two"></div>
          </div>
          <p>Não tem cadastro no sistema? <a className="link" href={'/signup'}>Fazer cadastro</a></p>
        </div>
        <div className="ilustration">
          <Image className="image-right" src='/security/ilustration2.png' fill alt="Imagem da direita - ilustração" />
        </div>
      </div>
    </section>
  );
}

export default Login;
