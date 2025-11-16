'use client';

import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

type CardType = {
  id: number;
  type: 'top' | 'right' | 'bottom' | 'left';
  image: string;
  text: string;
};

const cards: CardType[] = [
  { id: 1, type: 'left', image: '/javascript.png', text: 'JavaScript' },
  { id: 2, type: 'top', image: '/reactjs.png', text: 'React' },
  { id: 3, type: 'right', image: '/nextjs.png', text: 'NextJs' },
  { id: 4, type: 'bottom', image: '/bootstrap.png', text: 'Bootstrap' },
  { id: 5, type: 'top', image: '/figma.png', text: 'Figma' },
  { id: 6, type: 'bottom', image: '/php.png', text: 'PHP' },
  { id: 7, type: 'left', image: '/sql.png', text: 'SQL' },
];

const CardGrid = () => {
  const getFlexDirection = (type: string) => {
    switch (type) {
      case 'top':
        return 'flex-column';
      case 'bottom':
        return 'flex-column-reverse';
      case 'right':
        return 'flex-row-reverse';
      case 'left':
        return 'flex-row';
      default:
        return 'flex-column';
    }
  };

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`d-flex ${getFlexDirection(card.type)} m-1 shadow`}
            style={{
              width:
                card.type === 'top' || card.type === 'bottom'
                  ? '100px'
                  : '150px',
              height:
                card.type === 'top' || card.type === 'bottom'
                  ? '150px'
                  : '100px',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            {/* ✅ Optimized Image */}
            <div
              style={{
                width:
                  card.type === 'top' || card.type === 'bottom'
                    ? '100%'
                    : '50%',
                height:
                  card.type === 'top' || card.type === 'bottom'
                    ? '50%'
                    : '100%',
                position: 'relative',
              }}
            >
              <Image
                src={card.image}
                alt={card.text}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* ✅ Text Section */}
            <div
              className="d-flex align-items-center justify-content-center p-1"
              style={{
                width:
                  card.type === 'top' || card.type === 'bottom'
                    ? '100%'
                    : '50%',
                height:
                  card.type === 'top' || card.type === 'bottom'
                    ? '50%'
                    : '100%',
              }}
            >
              <p
                className="mb-0 text-center"
                style={{ fontSize: '0.7rem', color: '#000' }}
              >
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
