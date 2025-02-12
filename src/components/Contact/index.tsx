import { IconBrandWhatsapp } from '@tabler/icons-react';
import './contact.css';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/utils/url';
import { Car } from '@/models/Car';
import { VehicleCard } from '../VehicleCard';

function Contact() {

  const [cars, setCars] = useState<any[]>([]);
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');

  async function loadCars() {
    console.log('load...');
    const response = await fetch(`${baseUrl}/cars/7cfb24a7-9af1-4b08-a60a-09438e573ab7?model=${model}&year=${year}`);
    const data = await response.json();

    if (data) {
      setCars(data);
      console.log(data);
    }
  }

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <section className="contact__container">
      <div className="contact">
        <h3 className='line_subtitle'>Atendimento</h3>
        <div className="box_contact">
          <div className="left">
            <a href='#courses'><span>Cursos</span></a>
            <a href='/pictures'><span>Galeria de Fotos</span></a>
          </div>
          <div className="right">
            <p>Segunda a Sexta de 7h ás 12h e 19h ás 21h30, Sábado: 7h ás17h.</p>
            <p>CNPJ: 05.539.849/0002-32</p>
            <a href='https://wa.me/558432742951' target='_blanc' className="whatsapp"><IconBrandWhatsapp stroke={1} /> Entrar em contato</a>
          </div>
        </div>
        <form>
          <input type='text' placeholder='Modelo'
            onChange={(e) => setModel(e.target.value)}
          />
          <input type='text' placeholder='Ano'
            onChange={(e) => setYear(e.target.value)}
          />
          <button type='button' onClick={loadCars}>Carregar</button>
        </form>
        {cars.map((car: Car, i: number) => (
          <VehicleCard
            key={i}
            image={car.image}
            model={car.model}
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

export { Contact }
