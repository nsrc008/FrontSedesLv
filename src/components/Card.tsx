import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card my-3">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
