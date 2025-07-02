import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hier steht nur Müll</h2>
      <form>
        <label htmlFor="eingabe">Eingabefeld</label>
        <input type="text" id="eingabe"></input>
      </form>
      <a href="https://de.wikipedia.org/wiki/Burg" className="article__link">
        click here to learn smth
      </a>
    </article>
  );
}
