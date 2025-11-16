'use client';

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

const cardsData = [
  {
    title: 'Winmark Technology OPC',
    image: '/winmark.jpg',
    link: 'https://measabgroup.com/',
  },
  {
    title: 'Measab Academy',
    image: '/measabacademy.jpg',
    link: 'https://measabacademy.org/home-2/',
  },
  {
    title: 'Dar Al Arkan Real Estate Ltd.',
    image: '/daarbd.jpg',
    link: 'https://daarbd.com/',
  },
  {
    title: 'Need Pickup',
    image: '/needpickup.jpg',
    link: 'https://needpickup.22web.org/',
  },
  {
    title: 'Vai Vai Hatchery',
    image: '/vai-vai-hatchery.jpg',
    link: 'https://vai-vai-hatchary.fast-page.org/',
  },
  {
    title: 'Need Interior',
    image: '/interiordesign.jpg',
    link: 'https://need-interior.xo.je/',
  },
];

export default function ExpandingCards() {
  // ✅ Fix: activeIndex এ টাইপ যোগ করা হয়েছে
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
    setScrollY(0);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Auto-scroll image inside modal
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showModal) {
      interval = setInterval(() => {
        setScrollY((prev) => (prev < 100 ? prev + 0.5 : 0));
      }, 30);
    }
    return () => clearInterval(interval);
  }, [showModal]);

  return (
    <div className="d-flex justify-content-center">
      <div
        className="d-flex container align-items-end"
        style={{
          gap: '10px',
          overflowX: 'auto',
          width: '100%',
          borderRadius: '10px',
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: '80px',
              height: '250px',
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              transform: 'rotateY(5deg)',
              transformOrigin: 'left',
            }}
            className="card-hover"
          >
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                textAlign: 'center',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                fontSize: '12px',
                padding: '4px 0',
              }}
            >
              {card.title}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Fix: activeIndex !== null চেক যোগ করা হয়েছে */}
      {showModal && activeIndex !== null && (
        <div
          className="modal show"
          style={{
            display: 'block',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1050,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{
              maxWidth: '80%',
              position: 'relative',
            }}
          >
            <div className="modal-content bg-dark text-white position-relative">
              {/* Close Button */}
              <button
                type="button"
                className="btn btn-danger position-absolute"
                style={{ top: '10px', right: '10px', zIndex: 10 }}
                onClick={closeModal}
              >
                ✕ Close
              </button>

              {/* Image with Auto Scroll */}
              <div
                className="modal-body p-0"
                style={{
                  overflow: 'hidden',
                  height: '80vh',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${cardsData[activeIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `center ${scrollY}%`,
                    width: '100%',
                    height: '100%',
                    transition: 'background-position 0.1s linear',
                  }}
                ></div>

                {/* Link Button on Image */}
                <a
                  href={cardsData[activeIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light position-absolute"
                  style={{
                    top: '15px',
                    left: '15px',
                    zIndex: 10,
                    opacity: 0.9,
                  }}
                >
                  🔗 Visit Link
                </a>
              </div>

              <div className="modal-footer justify-content-center">
                <h5>{cardsData[activeIndex].title}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
