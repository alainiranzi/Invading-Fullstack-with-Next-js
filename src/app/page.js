import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="Logo" width={200} height={200} />
      <h1>Welcome to this Next.js app</h1>
      <p>Let&apos;s get started</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
