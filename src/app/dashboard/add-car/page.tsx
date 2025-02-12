'use client';

import { IconCar, IconUpload } from '@tabler/icons-react';
import './add-car.css';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { baseUrl } from '@/utils/url';
import { Title } from '@/components/Title';
import { useCars } from '@/data/hooks/useCars';
import { Message } from '@/components/Message';

function AddCar() {

  const [file, setFile] = useState<File>();
  const [model, setModel] = useState<string>('');
  const [characteristics, setCharacteristics] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [kilometer, setKilometer] = useState<string>('');
  const [fuel, setFuel] = useState('');
  const [condition, setCondition] = useState('');


  const [imageUrl, setImageUrl] = useState<File>();
  const inputRef = useRef();
  const { registerCar, message, activeMessage, responseStatus } = useCars();

  function onChooseFile() {
    if (inputRef) {
      inputRef.current.click();
    }
  }

  async function saveCar(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const car = {
      model,
      characteristics,
      price,
      year,
      kilometer,
      fuel,
      condition
    }
    await registerCar(formData, car);
  }


  return (

    <section className='form-car-container'>
      <Message message={message} status={responseStatus} activeMessage={activeMessage} />
      <Title primary='Cadastrar veiculo' secondary='o veiculo aparecerá no site' icon={IconCar} />
      <div className="form-car">
        <div className="content">
          <form onSubmit={saveCar} encType='multipart/form-data' className='form_create' action="" method="post">
            <div className='box'>
              <div className='input-form'>

                <label htmlFor="category">Modelo</label>
                <input
                  onChange={(e) => setModel(e.target.value)}
                  value={model}
                  name='model'
                  type="text"
                  placeholder='Modelo'
                />
              </div>
            </div>
            <div className='box'>
              <div className='input-form'>
                <label htmlFor="category">Caracteristicas</label>
                <input
                  onChange={(e) => setCharacteristics(e.target.value)}
                  name='model'
                  type="text"
                  placeholder='Caracteristicas'
                />
              </div>
              <div className='input-form'>
                <label htmlFor="category">Preço</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  name='model'
                  type="number"
                  placeholder='Preço'
                  value={price}
                />
              </div>
            </div>

            <div className='box'>
              <div className='input-form'>
                <label htmlFor="category">Ano do veiculo</label>
                <input
                  onChange={(e) => setYear(e.target.value)}
                  value={year}
                  name='model'
                  type="text"
                  placeholder='Ano do veiculo'
                />
              </div>
              <div className='input-form'>
                <label htmlFor="category">Kilometragem</label>
                <input
                  onChange={(e) => setKilometer(e.target.value)}
                  value={kilometer}
                  name='model'
                  type="text"
                  placeholder='Kilometragem'
                />
              </div>
            </div>

            <div className='box'>
              <div className='input-form'>
                <label htmlFor="category">Tipo de combustivel</label>
                <input
                  onChange={(e) => setFuel(e.target.value)}
                  value={fuel}
                  name='model'
                  type="text"
                  placeholder='Tipo de combustivel'
                />
              </div>
              <div className='input-form'>
                <label htmlFor="category">condição</label>
                <input
                  onChange={(e) => setCondition(e.target.value)}
                  value={condition}
                  name='model'
                  type="text"
                  placeholder='Condição (0 KM - SEMI NOVO)'
                />
              </div>
            </div>
            <div className='box'>
              <div className='input-form'>
                <label htmlFor="category">Imagem do carro</label>
                <input
                  onChange={(e) => setFile(e.target.files?.[0])}
                  name='file'
                  type="file"
                  ref={inputRef}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            <div onClick={onChooseFile} className='btn-file'>
              <span><IconUpload stroke={2} size={40} /></span>
              <p>Upload image</p>
            </div>
            <button className='button-fill btn-save' type="submit">Salvar</button>
          </form>

          <div className='image-preview'>
            <h4>Image preview</h4>
            {file ?
              <img
                src={URL.createObjectURL(file)}
                className='image-prev'
                width={200} height={200}
                alt='magem'
              />
              :
              <img
                src='/car.png'
                className='image-prev'
                width={200}
                height={200}
                alt='User'
              />
            }
          </div>
        </div>

      </div>
    </section>
  );
}

export default AddCar;
