import './GrowCard.css';

type GrowCard = {
  title: string;
  description: string;
  symbol: string;
  BGClass: string;
};

export default function GrowCard({
  title,
  description,
  BGClass,
  symbol,
}: GrowCard) {
  return (
    <div className="container">
      <div className="row">
        <div className="col column">
          <div className={`card ${BGClass}`}>
            <div className="txt">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
            <div className="ico-card">
              <i className={`${symbol}`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
