"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// async function getQuote() {
//   const resp = await fetch("https://api.quotable.io/random", {
//     // cache: "no-cache",
//     // next: { revalidate: 10 },
//   });
//   return resp.json();
// }
export default function Home() {
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log("resp", resp);
        console.log("quote", resp.content);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, []);

  return <h1>Hello world</h1>;
}
