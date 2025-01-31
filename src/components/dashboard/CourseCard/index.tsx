
import Image from 'next/image';
import './courseCard.css';

interface CourseCardProps {
    thumbnail: string;
    title: string;
}

function CourseCard({ thumbnail, title }: CourseCardProps) {

    return (
        <section className="coursecarditem__container">
            <div className="card_item">
                <Image className='tec_image' src={thumbnail} width={200} height={200} alt='Técnico em Enfermagem' />
                <div className="box_card">
                    <h3>{title}</h3>
                </div>
            </div>
        </section>
    );
}

export { CourseCard }
