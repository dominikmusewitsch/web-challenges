export default function App() {
  function Currywurst() {
    console.log("You clicked me!");
  }

  return (
    <Button
      color="blue"
      disabled={false}
      text="Hello World!"
      pommes={Currywurst}
    />
  );
}

function Button({ color, disabled, text, pommes }) {
  return (
    <button
      style={{ color }}
      disabled={disabled}
      // onClick={() => alert("You clicked me!")}
      onClick={pommes}
    >
      {text}
    </button>
  );
}
