import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

export default function Volume1() {
  return (
    <>
      <Link href="../"> ← All Volumes</Link>
      <h1>{volumes[2].title}</h1>
      <p>{volumes[2].description}</p>
      <ul>
        {volumes[2].books.map((book) => (
          <li key={book.ordinal}>
            <p>{book.ordinal}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        alt=""
        width={140}
        height={230}
      />
      <Link href="./the-two-towers">Previous</Link>
    </>
  );
}
