export default function App() {
  return <Greeting name="Dominik" />;
}

function Greeting({ name }) {
  const coach = "Felix";
  const isCoach = name === coach;

  return <h1>Hello, {isCoach ? "Coach" : name}!</h1>;
}
