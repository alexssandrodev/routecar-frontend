
import { IconBusinessplan, IconCertificate, IconDeviceDesktop } from '@tabler/icons-react';
import './benefits.css';

function Benefits() {
    return (
        <section className="benefits__container">
            <h3 className='line_subtitle'>Vantagens de estudar com a gente!</h3>
            <div className="benefits">
                <div className="benefit__card">
                    <span><IconDeviceDesktop size={40} /></span>
                    <h4>Cursos 100% online</h4>
                    <p>
                        Nossos cursos são 100% online, ou seja, você tem
                        a flexibilidade de estudar no horário que for melhor para você
                        e no conforto desuacasa.
                    </p>
                </div>
                <div className="benefit__card">
                    <span><IconCertificate size={40} /></span>
                    <h4>Certificado reconhecido pelo MEC</h4>
                    <p>
                        Nossos cursos são reconhecidos pelo ministério da educação,
                        isso significa que o certificado é válido em todo o território nacional.
                    </p>
                </div>
                <div className="benefit__card">
                    <span><IconBusinessplan size={40} /></span>
                    <h4>Parcerias com empresas</h4>
                    <p>
                        Temos parceria continua com diversas empresas
                        para assim conectar o estudante com o mercado de trabalho.
                    </p>
                </div>
            </div>
        </section>
    );
}

export { Benefits }
