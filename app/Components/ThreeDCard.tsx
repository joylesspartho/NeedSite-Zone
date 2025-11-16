'use client';


import { useState } from 'react';

type CardText = {
  CardTopTitle: string;
  CardBadgeText: string;
  CardParagraphText: string;
  CardSymbol: string;
};

export default function BootstrapCard({
  CardTopTitle,
  CardBadgeText,
  CardParagraphText,
  CardSymbol,
}: CardText) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="card border-0 shadow-lg text-center position-relative"
        style={{
          width: '24rem',
          height: '20rem',
          transform: hovered
            ? 'translateY(-10px) scale(1.02)'
            : 'translateY(0)',
          boxShadow: hovered
            ? '0 20px 30px rgba(0,0,0,0.25)'
            : '0 0 0 rgba(0,0,0,0)',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="card-body d-flex flex-column justify-content-center align-items-center h-100 position-relative"
          style={{ overflow: hovered ? 'auto' : 'none' }}
        >
          {/* Title */}
          <h4
            className="lead fw-bold position-absolute w-100 text-center"
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              transition: 'opacity 0.3s ease',
              opacity: hovered ? 0 : 1,
              zIndex: 1,
            }}
          >
            {CardTopTitle}
          </h4>

          {/* Badge */}
          <h5
            className="card-title fw-bold badge text-dark position-absolute w-100 text-center"
            style={{
              top: hovered ? '5%' : '50%',
              display: hovered ? 'block' : 'none',
              transform: hovered ? 'translateY(0)' : 'translateY(-50%)',
              transition:
                'top 0.4s ease, opacity 0.4s ease, transform 0.4s ease',
              zIndex: 2,
            }}
          >
            {CardBadgeText}
          </h5>

          {/* Paragraph */}
          <p
            className=" text-muted text-justify position-absolute w-100 px-3"
            style={{
              top: hovered ? '20%' : '50%',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(-50%)',
              transition:
                'top 0.4s ease 0.1s, opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
              zIndex: 2,
            }}
          >
            {CardParagraphText}
          </p>

          {/* Icon */}
          <div
            className="position-absolute"
            style={{
              bottom: '150px',
              right: '50px',
              fontSize: '2rem',
              opacity: 0.7,
            }}
          >
            <i
              className={`${CardSymbol}`}
              style={{
                position: 'absolute',
                color: 'black',
                right: '0px',

                opacity: 0.2,
                fontSize: '200px',
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
