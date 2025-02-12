
import { IconBrandWhatsapp } from '@tabler/icons-react';
import './vehicles.css';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/utils/url';
import { Car } from '@/models/Car';
import { VehicleCard } from '../VehicleCard';

function Vehicles() {

  const [cars, setCars] = useState<any[]>([]);
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');

  async function loadCars() {
    console.log('load...');
    const response = await fetch(`${baseUrl}/cars/7cfb24a7-9af1-4b08-a60a-09438e573ab7?model=${model}&year=${year}`);
    const data = await response.json();

    if (data) {
      console.log(data);
      setCars(data);
    }
  }

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <section className="vehicles-container container">
      <div className="vehicles-list">
        <h2>Pesquisar veiculo</h2>
        <form>
          <input type='text' placeholder='Modelo'
            onChange={(e) => setModel(e.target.value)}
          />
          <input type='text' placeholder='Ano'
            onChange={(e) => setYear(e.target.value)}
          />
          <button type='button' onClick={loadCars} className='button-filled'>Filtrar</button>
        </form>
        <div className='vehicles'>
          {cars.length === 0 ? (
            <p>Nenhum carro encontrado!</p>
          ) : cars.map((car: Car, i: number) => (
            <VehicleCard
              key={i}
              {...car}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Vehicles }
