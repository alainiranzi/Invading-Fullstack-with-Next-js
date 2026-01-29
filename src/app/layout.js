"use client";
import { usePathname } from "next/navigation";
import MainHeader from "./components/main-header/main-header";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const showHeader = pathname !== "/meals"; // hide header on meals pages

  return (
    <html lang="en">
      <body>
        {showHeader && <MainHeader />}
        {children}
      </body>
    </html>
  );
}
