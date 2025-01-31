
import { IconBrandWhatsapp } from '@tabler/icons-react';
import './contact.css';

function Contact() {
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
            </div>
        </section>
    );
}

export { Contact }
