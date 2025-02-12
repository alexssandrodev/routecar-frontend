
import { IconCalendar, IconDashboard, IconGasStation } from '@tabler/icons-react';
import { Format } from '../../utils/Format';
import './searchcard.css';
import Image from 'next/image';
import Link from 'next/link';

interface SearchCardProps {
  image: string;
  model: string;
  characteristics: string;
  price: number;
  year: string;
  kilometer: number;
  fuel: string;
  condition: string;
}

function SearchCard({ image, model, characteristics, price, year, kilometer, fuel, condition }: SearchCardProps) {

  return (
    <section className="searchcard-container">
      <div className="searchcard">
        <div className='box-image'>
          <p className='condition'>{condition}</p>
          <Image className='tec_image' src={image} width={100} height={50} alt='Técnico em Enfermagem' />
        </div>
        <div className="box_card">
          <div className="box_time">
            <h2>{model}</h2>
            <p>{characteristics}</p>
            <div className="installment">
              <h4>{Format.formatMoney(price)}</h4>
            </div>
          </div>
          <div className="optionals">
            <div className='opt'>
              <span><IconCalendar /> {year}</span>
              <span><IconDashboard /> {kilometer}</span>
              <span><IconGasStation /> {fuel}</span>
            </div>
            <Link className='button-filled' href='/car-details'><span>Mais detalhes</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SearchCard }
