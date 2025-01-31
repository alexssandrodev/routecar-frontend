import { ElementType } from 'react';
import './title.css';

interface TitleProps {
  primary: string;
  secondary?: string;
  icon: ElementType;
}

function Title(props: TitleProps) {
  return (
    <section className="container__title">
      <span><props.icon stroke={1} /></span>
      <div className="title">
        <h2>{props.primary}</h2>
        <p>{props.secondary}</p>
      </div>
    </section>
  );
}

export { Title }
