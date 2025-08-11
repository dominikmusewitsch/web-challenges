import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(`/api/products/${id}`, fetcher);

  if (!data) return <h1>Loading...</h1>;

  return (
    <div key={data.id}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        {data.price} {data.currency}
      </p>
      <p>{data.category}</p>
    </div>
  );
}
