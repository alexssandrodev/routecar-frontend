'use client';

import { IconNote, IconTools, IconX } from '@tabler/icons-react';
import { Title } from '../../../components/Title';
import './note.css';
import { FormEvent, useState } from 'react';
import { PdfNote } from '@/components/Pdf';
import pdf from 'react-to-pdf';
import generatePDF from 'react-to-pdf';
import { useDataApi } from '@/data/hooks/useDataApi';
import { Part } from '@/types/Part';
import { Format } from '@/utils/Format';
// import pdf from 'react-to-pdf';

function CreateNote() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [model, setModel] = useState('');
    const [plate, setPlate] = useState('');
    const [kilometer, setKilometer] = useState('');
    const [observation, setObservation] = useState('');
    const [created_at, setCreatedAt] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [parts, setParts] = useState<Part[]>([]);

    const { createNote } = useDataApi();

    async function saveNote(e: FormEvent) {
        e.preventDefault();
        await createNote(name, email, tel, kilometer, model, plate, observation,created_at, parts);
    }

    async function getParts(e: FormEvent) {
        setTitle('');
        setPrice('');
        setQuantity('');
        e.preventDefault();
        setParts([...parts, { title: title, price: parseFloat(price), quantity: parseInt(quantity) }]);
    }
    return (
        <section className="container__note container">
            <div className="note">
                <Title icon={IconNote} primary='Criar nota' secondary='criar a nota do cliente' />
                <form action="" method="post">
                    <div className="box_input">
                        <div className="input_form">
                            <label htmlFor="customer_name">Nome do cliente</label>
                            <input type="text" id="customer_name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome do cliente' />
                        </div>
                        <div className="input_form">
                            <label htmlFor="customer_email">E-mail do cliente</label>
                            <input type="email" id="customer_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail do cliente' />
                        </div>
                    </div>
                    <div className="box_input">
                        <div className="input_form">
                            <label htmlFor="customer_tel">Telefone do cliente</label>
                            <input type="tel" id="customer_tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder='Telefone do cliente' />
                        </div>
                        <div className="input_form">
                            <label htmlFor="vehicle_model">Modelo do veiculo</label>
                            <input type="text" id="vehicle_model" value={model} onChange={(e) => setModel(e.target.value)} placeholder='Modelo do veiculo' />
                        </div>
                    </div>
                    <div className="box_input">
                        <div className="input_form">
                            <label htmlFor="vehicle_plate">Placa do veiculo</label>
                            <input type="text" id="vehicle_plate" value={plate} onChange={(e) => setPlate(e.target.value)} placeholder='Placa do veiculo' />
                        </div>
                        <div className="input_form">
                            <label htmlFor="vehicle_kilometer">Kilometragem do veiculo</label>
                            <input type="text" id="vehicle_kilometer" value={kilometer} onChange={(e) => setKilometer(e.target.value)} placeholder='Kilometragem do veiculo' />
                        </div>
                    </div>
                    <div className="box_input">
                        <div className="input_form">
                            <label htmlFor="vehicle_date">Data</label>
                            <input type="date" id="vehicle_date" value={created_at} onChange={(e) => setCreatedAt(e.target.value)} placeholder='Data' />
                        </div>
                        <div className="input_form">
                            <label htmlFor="observation">Observação</label>
                            <textarea id="observation" value={observation} onChange={(e) => setObservation(e.target.value)} placeholder='Observação'></textarea>
                        </div>
                    </div>

                    <div className="box_part">
                        <Title primary='Adicionar as paças' icon={IconTools} />
                        <div className="box_input">
                            <div className="input_form">
                                <label htmlFor="part_title">Nome da paça</label>
                                <input type="text" id="part_title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Nome da paça' />
                            </div>
                            <div className="input_form">
                                <label htmlFor="part_value">Valor da peça</label>
                                <input type="number" id="part_value" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Valor da peça' />
                            </div>
                            <div className="input_form">
                                <label htmlFor="part_quantity">Quantidade</label>
                                <input type="number" id="part_quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Quantidade' />
                            </div>
                            <button onClick={getParts} className="btn_part">Adicionar</button>
                        </div>
                        <div className="listParts">
                            <div className="parts">
                                {!parts.length ? <p>Nenhuma peça adicionada</p>
                                    : parts.map((part) => (
                                        <div className="list">
                                            <p>{part.title}</p>
                                            <h4>{Format.formatMoney(part.price)}</h4>
                                            <h5>quant: {part.quantity}</h5>
                                            <span className='icon-x'>{<IconX size={15} />}</span>
                                        </div>
                                    ))}

                            </div>
                            <p>Total: <h2 className="total">R$ 250,00</h2></p>
                        </div>
                    </div>

                    <input onClick={saveNote} className='btn__save' type="submit" value="Salvar" />
                </form>
            </div>
            <div className="pdf">
                <PdfNote
                    name={name}
                    email={email}
                    tel={tel}
                    kilometer={kilometer}
                    model={model}
                    plate={plate}
                    observation={observation}
                    created_at={created_at}
                    parts={parts}
                    />
            </div>

        </section>
    );
}

export default CreateNote;
