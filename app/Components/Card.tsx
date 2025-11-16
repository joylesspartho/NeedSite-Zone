'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

type CardProps = {
  title: string;
  body: string;
  symbol: string;
};

export default function Card({ title, body, symbol }: CardProps) {
  return (
    <div className="container d-flex align-items-center justify-content-center flex-wrap position-relative my-4">
      <div className="custom-card d-flex position-relative flex-column text-center">
        <div className="iconContainer">
          <i className={`fas ${symbol}`}></i>
        </div>
        <div className="content">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}
