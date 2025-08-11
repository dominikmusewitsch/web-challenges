import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data } = useSWR("/api/products", fetcher);

  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            {product.price} {product.currency}
          </p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}
