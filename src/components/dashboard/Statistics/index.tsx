import { IconMinus, IconPigMoney, IconPlus } from '@tabler/icons-react';
import './statistics.css';

function Statistics() {

    return (
        <section className="statistics__container">
            <div className="statistics">
                <div className="box">
                    <span><IconPigMoney /></span>
                    <div className="total">
                        <p>Total</p>
                        <h3 className='amount'></h3>
                    </div>
                </div>
                <div className="box">
                    <span><IconPlus /></span>
                    <div className="total">
                        <p>Receitas</p>
                        <h3 className='revenues'>{}</h3>
                    </div>
                </div>
                <div className="box">
                    <span><IconMinus /></span>
                    <div className="total">
                        <p>Despesas</p>
                        <h3 className='expenses'>{}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Statistics }
