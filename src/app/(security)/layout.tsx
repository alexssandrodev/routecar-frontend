import './security.css';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <section className="security__container">
            {children}
        </section>
    );
}

export default Layout;
