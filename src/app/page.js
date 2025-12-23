import Link from "next/link";

export default function Home() {
  return (
    
    <main>
      <h1>Welcome to this Next.js app</h1>
      <p>Let&apos;s get started</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
