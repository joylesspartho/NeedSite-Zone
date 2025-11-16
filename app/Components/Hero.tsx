import './Hero.css';
type herotext = {
  HeroHeadingText: string;
};

export default function Hero({ HeroHeadingText }: herotext) {
  return (
    <>
      <div className="bg-primary hero-section">
        <div className="animated-dots">
          {[...Array(100)].map((_, i) => (
            <span key={i} className="dot"></span>
          ))}
        </div>
        <div className="container p-5">
          <div className="p-5">
            <h1 className="text-decoration-underline text-center text-white">
              {HeroHeadingText}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
