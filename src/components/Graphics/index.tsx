import './graphics.css';

interface GraphicsProps {
    monthName: string;
    distributeExpenses: any[];
}

function Graphics (props: GraphicsProps) {
    console.log(props.distributeExpenses)
    return (
        <section className="graphics__container">
            <div className="graphics">
                <h4>Impacto das despesas em % no mês de: janeiro</h4>
                <div className="graphic">
                    {props.distributeExpenses.map((expenses, index) => (
                        <p key={index} className='expense_percentage' style={{ width: `${expenses.percentage}` }}>{expenses.category} {expenses.percentage}%</p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Graphics }
