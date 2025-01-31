import { IconPlus } from '@tabler/icons-react';
import { Title } from '../../../components/Title';
import './product.css';

function CreateProduct() {
    return (
        <section className="container__product">
            <div className="product">
                <Title icon={IconPlus} primary='Cadastrar produto' secondary='cadastrar produto no estoque' />
            </div>
        </section>
    );
}

export default CreateProduct;
