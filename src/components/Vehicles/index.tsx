
import { useCars } from '@/data/hooks/useCars';
import { Car } from '../../models/Car';
import { VehicleCard } from '../VehicleCard';

import './vehicles.css';

function Vehicles() {
  const { cars } = useCars();
  return (
    <section id='cars' className="vehicles-container container">
      <h2>Veiculos em Destaque</h2>
      <div className="vehicles">
        {
          cars.length === 0 ?
            <p>Nenhum carro cadastrado.</p>
            :
            cars && cars.map((car: Car, index: number) => (
              <VehicleCard
                key={index}
                image={car.image}
                title={car.title}
                characteristics={car.characteristics}
                price={car.price}
                year={car.year}
                kilometer={car.kilometer}
                fuel={car.fuel}
                condition={car.condition}
              />
            ))}
      </div>
    </section>
  );
}

export { Vehicles }
