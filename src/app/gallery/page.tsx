'use client';

import Image from 'next/image';
import './gallery.css';
import { useState } from 'react';

function Gallery() {
    const [active, setActive] = useState<boolean>(false);

    function open(name: string) {
        setActive((state) => !state);

        return (
            <Image loading='lazy' className={`image ${active ? 'open' : ''}`} src={`/gallery/${name}.jpeg`} width={200} height={200} alt='Galeria 01' />
        );
    }

    return (
        <section className="gallery__container">
            <div className="gallery">
                <Image loading='lazy' className='image' src='/gallery/image01.jpeg' width={200} height={200} alt='Galeria 01' />
                <Image loading='lazy' className='image' src='/gallery/image02.jpeg' width={200} height={200} alt='Galeria 02' />
                <Image loading='lazy' className='image' src='/gallery/image03.jpeg' width={200} height={200} alt='Galeria 03' />
                <Image loading='lazy' className='image' src='/gallery/image04.jpeg' width={200} height={200} alt='Galeria 04' />
                <Image loading='lazy' className='image' src='/gallery/image05.jpeg' width={200} height={200} alt='Galeria 05' />
                <Image loading='lazy' className='image' src='/gallery/image06.jpeg' width={200} height={200} alt='Galeria 06' />
                <Image loading='lazy' className='image' src='/gallery/image07.jpeg' width={200} height={200} alt='Galeria 07' />
                <Image loading='lazy' className='image' src='/gallery/image08.jpeg' width={200} height={200} alt='Galeria 08' />
                <Image loading='lazy' className='image' src='/gallery/image09.jpeg' width={200} height={200} alt='Galeria 09' />
                <Image loading='lazy' className='image' src='/gallery/image10.jpeg' width={200} height={200} alt='Galeria 10' />
                <Image loading='lazy' className='image' src='/gallery/image11.jpeg' width={200} height={200} alt='Galeria 11' />
            </div>
        </section>
    );
}

export default Gallery;
