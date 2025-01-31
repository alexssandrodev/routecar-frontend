'use client';

import { FormEvent, useState } from "react";
import './signup.css';

import { useRouter } from "next/navigation";
import { Message } from "@/components/Message";
import Image from "next/image";
import { IconKey, IconMailPin, IconUserBolt } from "@tabler/icons-react";

function Signup() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [responseStatus, setResponseStatus] = useState<boolean>(false);
    const [activeMessage, setActiveMessage] = useState<boolean>(false);

    const router = useRouter();

    function redirect(time: number) {
        setTimeout(() => {
            router.push('/login');
        }, time);
    }

    function handleActiveMessage() {
        setActiveMessage(true);
        setTimeout(() => {
            setActiveMessage(false);
        }, 10000);
    }

    async function signup(event: FormEvent) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3333/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
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
            setMessage(data.message);
            setResponseStatus(response.ok);
            redirect(3000);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="signup__container">
            <Message message={message} status={responseStatus} activeMessage={activeMessage} />
            <div className="box_signup">
                <div className="signup">
                    <h2>Faça seu cadastro</h2>
                    <form action="" method="post" onSubmit={signup}>
                        <label htmlFor="name">Nome</label>
                        <div className="input_login">
                            <input onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Nome" />
                            <span><IconUserBolt /></span>
                        </div>
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
                        <input className="btn_save" type="submit" value="Salvar" />
                    </form>
                    <div className="lines">
                        <div className="line_one"></div>
                        <span>OR</span>
                        <div className="line_two"></div>
                    </div>
                    <p>Já tem cadastro no sistema? <a className="link" href={'/login'}>Fazer login</a></p>
                </div>
                <div className="ilustration">
                    <Image className="image-right" src='/security/ilustration1.png' fill alt="Imagem da direita - ilustração" />
                </div>
            </div>
        </section>
    );
}

export default Signup;
