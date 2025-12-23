import Link from "next/link";
import Image from "next/image";
import logoimg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/" className="logo-link">
        <Image src={logoimg} alt="Meals on plate" />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
