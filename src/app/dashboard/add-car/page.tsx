'use client';

import { IconCar, IconUpload } from '@tabler/icons-react';
import './add-car.css';
import { useEffect, useRef, useState } from 'react';
import { baseUrl } from '@/utils/url';
import { Title } from '@/components/Title';

function AddCar() {

  const [month, setMonth] = useState('janeiro');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('Receita');
  const [value, setValue] = useState('');
  const [created, setCreated] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState('');


  const [imageUrl, setImageUrl] = useState();
  const [preview, setPreview] = useState([]);
  const inputRef = useRef();

  function onChooseFile() {
    if (inputRef) {
      inputRef.current.click();
    }
  }

  async function loadImages() {
    try {
      const response = await fetch(`${baseUrl}/images`);
      const data = await response.json();
      setPreview(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadImages();
  }, []);

  return (

    <section className={`form-car-container`}>
      <Title primary='Cadastrar veiculo' secondary='o veiculo aparecerá no site' icon={IconCar} />
      <div className="form-car">
        <div className="content">
          <form className='form_create' action="" method="post">
            <div className='box'>
              <div className='input-form'>

                <label htmlFor="category">Modelo</label>
                <input
                  onChange={(e) => setImageUrl(e.target.files[0])}
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
                  onChange={(e) => setImageUrl()}
                  name='model'
                  type="text"
                  placeholder='Caracteristicas'
                />
              </div>
              <div className='input-form'>
                <label htmlFor="category">Preço</label>
                <input
                  onChange={(e) => setImageUrl()}
                  name='model'
                  type="number"
                  placeholder='Preço'
                />
              </div>
            </div>

            <div className='box'>
              <div className='input-form'>
                <label htmlFor="category">Ano do veiculo</label>
                <input
                  onChange={(e) => setImageUrl()}
                  name='model'
                  type="text"
                  placeholder='Ano do veiculo'
                />
              </div>
              <div className='input-form'>
                <label htmlFor="category">Kilometragem</label>
                <input
                  onChange={(e) => setImageUrl()}
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
                  onChange={(e) => setImageUrl()}
                  name='model'
                  type="text"
                  placeholder='Tipo de combustivel'
                />
              </div>
              <div className='input-form'>
                <label htmlFor="category">condição</label>
                <input
                  onChange={(e) => setImageUrl()}
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
                  onChange={(e) => setImageUrl(e.target.files[0])}
                  name='image'
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
            {imageUrl ?
              <img
                src={URL.createObjectURL(imageUrl)}
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
