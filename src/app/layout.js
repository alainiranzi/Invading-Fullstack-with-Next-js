import "./global.css";

export const metadata = {
  title: "Meals",
  description: "Discover and share delicious meals from around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
