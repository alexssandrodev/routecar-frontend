
import { IconRegistered } from '@tabler/icons-react';
import './footer.css';

function Footer() {
    const actualYear = new Date().getFullYear();
    return (
        <footer className="footer__container">
            <p>PIRÂMIDE COLÉGIO E CURSO <strong>EAD</strong> <IconRegistered stroke={1} /> {actualYear} - Todos osdireitosreservados.</p>
        </footer>
    );
}

export { Footer }
