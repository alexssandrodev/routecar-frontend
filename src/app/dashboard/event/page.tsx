'use client';

import { Window } from '@/components/event/Window';
import './event.css';
import { Event } from '@convite/event';

export default function EventPage() {

    return (
        <section className="event__container">
            <div className="event">
                <Window label='Criar evento'>
                    <p>Crie seu evento</p>
                </Window>
            </div>
        </section>
    );
}
