import "./Button.css";

export default function Button({ children, type = "button", onClick }) {
  return (
    <button onClick={onClick} type={type} className="button">
      {children}
    </button>
  );
}
