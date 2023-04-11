import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

async function getQuote() {
  const resp = await fetch("https://api.quotable.io/random", {
    // cache: "no-cache",
    // next: { revalidate: 10 },
  });
  return resp.json();
}
export default async function Home() {
  const quote = await getQuote();
  console.log("quote:", quote.content);
  return <h1>{quote.content}</h1>;
}
