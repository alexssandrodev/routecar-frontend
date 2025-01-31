'use client';

import { IconDashboard } from '@tabler/icons-react';
import './header.css';
import { useEffect, useState } from 'react';
import { Format } from '@/utils/Format';

function HeaderDashboard() {
    const [actualMonth, setActualMonth] = useState<string>('');
    const [seconds, setSeconds] = useState<number>(0);

    function getActualMonth() {
        const today = new Date();
        const numberMonth = today.getMonth();
        switch (numberMonth) {
            case 0:
                setActualMonth('janeiro');
                break;
            case 1:
                setActualMonth('fevereiro');
                break;
            case 2:
                setActualMonth('março');
                break;
            case 3:
                setActualMonth('abril');
                break;
            case 4:
                setActualMonth('maio');
                break;
            case 5:
                setActualMonth('junho');
                break;
            case 6:
                setActualMonth('julho');
                break;
            case 7:
                setActualMonth('agosto');
                break;
            case 8:
                setActualMonth('setembro');
                break;
            case 9:
                setActualMonth('outubro');
                break;
            case 10:
                setActualMonth('novembro');
                break;
            case 11:
                setActualMonth('dezembro');
                break;
            default:
                setActualMonth('mês inválido');
                break;
        }
    }

    setInterval(() => {
        setSeconds(new Date().getMinutes());
    }, 60000);

    function getHour() {
        const pureHour = new Date().getHours();
        const pureMinutes = new Date().getMinutes();
        const hour = pureHour < 10 ? '0' + pureHour : pureHour;
        const minutes = pureMinutes < 10 ? '0' + pureMinutes : pureMinutes;
        return {
            hour,
            minutes
        };
    }

    useEffect(() => {
        setTimeout(() => {
            getActualMonth();
        }, 1000);
    }, []);

    return (
        <header className="header__dashboard">
            <div className="box_header">
                <h4><IconDashboard /> Dashboard</h4>
                <p>{actualMonth} - {Format.FormatDate(new Date())} - {`${getHour().hour}:${getHour().minutes}`}</p>
            </div>
        </header>
    );
}

export { HeaderDashboard }
