import MainHeader from "./components/main-header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Meals",
  description: "Delicious meals shared by our community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* SVG background */}
        <div className="header-background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#59453c", stopOpacity: "1" }} />
                <stop offset="100%" style={{ stopColor: "#bb9e8c", stopOpacity: "1" }} />
              </linearGradient>
            </defs>

            <path
              fill="url(#gradient)"
              d="
                M0,256
                L48,224
                C96,192 192,288 288,181.3
                C384,171 480,181 576,186.7
                C672,192 768,192 864,197.3
                C960,203 1056,213 1152,197.3
                C1248,181 1344,139 1392,117.3
                L1440,96
                L1440,0
                L0,0
                Z
              "
            />
          </svg>
        </div>

        {/* Header + content */}
        <MainHeader />

        <main className="page-content">
          {children}
        </main>
      </body>
    </html>
  );
}
