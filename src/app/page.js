import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Time to NextLevel Up
        </h1>
      <p><Link href='/meals'> Meals page</Link> </p>
      <p><Link href='/meals/share'>Our meals</Link></p>
      <p><Link href='/community'>Community</Link></p>
    </main>
  );
}
