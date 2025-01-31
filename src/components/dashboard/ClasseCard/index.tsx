
import Image from 'next/image';
import './classe-card.css';

interface ClasseCardProps {
    thumbnail: string;
    title: string;
}

function ClasseCard({ thumbnail, title }: ClasseCardProps) {
    return (
        <section className="classecard__container">
            <div className="card">
                <Image className='thumbnail_classe' src={thumbnail} width={200} height={200} objectFit='cover' alt='Imagem do curso' />
                <div className="infos">
                    <p>{title}</p>
                </div>
            </div>
        </section>
    );
}

export { ClasseCard }
