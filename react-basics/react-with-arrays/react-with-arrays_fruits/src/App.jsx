import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1234,
      name: "🍉 Watermelon",
      color: "red",
    },
    {
      id: 3456,
      name: "🍆 Eggplant",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} color={color}>
          {name}
        </Card>
      ))}
    </div>
  );
}
