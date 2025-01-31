'use client';

import { Message } from '../../../components/Message';
import './create.css';
import { FormEvent, useCallback, useEffect, useState } from 'react';

function Create() {

    const [month, setMonth] = useState('janeiro');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('Receita');
    const [value, setValue] = useState('');
    const [created, setCreated] = useState('');
    const [userId, setUserId] = useState('');

    const [message, setMessage] = useState<string>('');
    const [responseStatus, setResponseStatus] = useState<boolean>(false);
    const [activeMessage, setActiveMessage] = useState<boolean>(false);

    const optionalMessage = responseStatus ? 'você está sendo redirecionado' : '';

    const months = [
        'janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    const types = ['Receita', 'Despesa'];

    const changeType = useCallback(() => {
        if (type === 'Receita') {
            setType('revenue');
        }
        if (type === 'Despesa') {
            setType('expense');
        }
    }, []);

    useEffect(() => {
        function get() {
            const user = window.localStorage.getItem('user');
            if (user) {
                const data = user ? JSON.parse(user) : null;
                return data.payload.payload;
            }
        }
        get();
        setUserId(get().userId);
    }, []);

    useEffect(() => {
        changeType();
    }, [changeType]);

    function handleActiveMessage() {
        setActiveMessage(true);
        setTimeout(() => {
            setActiveMessage(false);
        }, 10000);
    }
    
    function redirect() {
        setTimeout(() => {
        },5000);
    }

    async function createLaunch(event: FormEvent) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3333/launchs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idUserSystem: userId,
                    monthName: month,
                    category: category,
                    type: type,
                    value: value,
                    created: created
                })
            });
            const data = await response.json();
            handleActiveMessage();
            if (data.statusCode === 500) {
                setMessage(data.message);
                setResponseStatus(response.ok);
                return;
            }
            setResponseStatus(response.ok);
            setMessage(data.message);
            redirect();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={`modal__container`}>
            <Message message={message} optionalMessage={optionalMessage} status={responseStatus} activeMessage={activeMessage} />
            <h3>Criar lançamento</h3>
            <div className="modal">
                <div className="content">
                    <form onSubmit={createLaunch} className='form_create' action="" method="post">
                        <label htmlFor="month">Mês</label>
                        <select onChange={(e) => setMonth(e.target.value)} name="" id="">
                            {months.map((month, index) => (
                                <option key={index} value={month}>{month}</option>
                            ))}
                        </select>
                        <label htmlFor="category">Categoria</label>
                        <input onChange={(e) => setCategory(e.target.value)} type="text" id="category" placeholder='Categoria' />
                        <label htmlFor="type">Tipo</label>
                        <select onChange={(e) => setType(e.target.value)} name="" id="type">
                            {types.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                        <label htmlFor="value">Valor</label>
                        <input onChange={(e) => setValue(e.target.value)} type="number" id="value" placeholder='Valor' />
                        <label htmlFor="created">Data</label>
                        <input onChange={(e) => setCreated(e.target.value)} type="date" id="created" placeholder='Data' />
                        <button className='btn_save' type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Create;
