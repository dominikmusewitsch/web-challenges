export default function App() {
  return <Sum valueA="5" valueB="6" />;
}

function Sum({ valueA, valueB }) {
  const solution = Number(valueA) + Number(valueB);
  return (
    <p>
      {valueA} + {valueB} = {solution}
    </p>
  );
}
