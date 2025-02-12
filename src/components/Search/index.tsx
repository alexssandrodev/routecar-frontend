import { ChangeEvent, FormEvent, useState } from 'react';
import './search.css';
import { useCars } from '@/data/hooks/useCars';
import { Message } from '../Message';
import { Car } from '@/models/Car';
import { SearchCard } from '../SearchCard';

function Search() {

  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const { cars, loadCars, message, responseStatus, activeMessage } = useCars();

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    await loadCars(model, year, price);
  }

  return (
    <section className='container-search container'>
      <Message message={message} status={responseStatus} activeMessage={activeMessage} />
      <div className='search'>
        <h2>Filtrar veiculos</h2>
        <form onSubmit={handleSearch} method='post' className='form-search'>
          <div className='input-form'>
            <label htmlFor='model'>Modelo</label>
            <input
              type='text'
              id='model'
              value={model}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setModel(e.target.value)}
              placeholder='Modelo do veiculo'
            />
          </div>

          <div className='input-form'>
            <label htmlFor='year'>Ano</label>
            <input
              type='text'
              id='year'
              value={year}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
              placeholder='Ano do veiculo'
            />
          </div>

          <div className='input-form'>
            <label htmlFor='price'>Valor</label>
            <input
              type='text'
              id='price'
              value={price}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
              placeholder='Valor do veiculo'
            />
          </div>
          <input type='submit' className='button-filled btn-search' value='Filtrar' />
        </form>
      </div>
    </section>
  );
}

export { Search }
