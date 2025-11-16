import './Button.css';

type ButtonText = {
  text: string;
};
export default function Button({ text }: ButtonText) {
  return (
    <>
      <div className="pt-3">
        <a href="/Contact" className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}
        </a>
      </div>
    </>
  );
}
