import Header from "../../../components/header";  // import correct path
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ padding: "20px" }}>
      <Header />
      <h2>About Us Page</h2>
      <p>Welcome to the about page!</p>
      <p><Link href="/">Back to Home</Link></p>
    </main>
  );
}
