import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

export default function Volume1() {
  return (
    <>
      <Link href="../"> ← All Volumes</Link>
      <h1>{volumes[1].title}</h1>
      <p>{volumes[1].description}</p>
      <ul>
        {volumes[1].books.map((book) => (
          <li key={book.ordinal}>
            <p>{book.ordinal}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image src="/images/the-two-towers.png" alt="" width={140} height={230} />
      <Link href="./the-fellowship-of-the-ring">Previous</Link>
      <Link href="./the-return-of-the-king">Next</Link>
    </>
  );
}
