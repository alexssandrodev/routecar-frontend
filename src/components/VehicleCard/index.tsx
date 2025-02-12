
import { IconCalendar, IconDashboard, IconGasStation } from '@tabler/icons-react';
import { Format } from '../../utils/Format';
import './vehiclecard.css';
import Image from 'next/image';
import Link from 'next/link';

interface VehicleCardProps {
  image: string;
  model: string;
  characteristics: string;
  price: number;
  year: string;
  kilometer: number;
  fuel: string;
  condition: string;
}

function VehicleCard({ image, model, characteristics, price, year, kilometer, fuel, condition }: VehicleCardProps) {

  return (
    <section className="vehiclecard-container">
      <div className="vehiclecard">
        <div>
          <p className='condition'>{condition}</p>
          <Image className='tec_image' src={image} width={300} height={300} alt='Técnico em Enfermagem' />
        </div>
        <div className="box_card">
          <div className="box_time">
            <div className='title'>
              <h2>{model}</h2>
              <p>{characteristics}</p>
            </div>
            <div className="installment">
              <h4>{Format.formatMoney(price)}</h4>
              <Link className='button-filled' href='/car-details'><span>Mais detalhes</span></Link>
            </div>
          </div>
          <div className="optionals">
            <span><IconCalendar /> {year}</span>
            <span><IconDashboard /> {kilometer}</span>
            <span><IconGasStation /> {fuel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { VehicleCard }
