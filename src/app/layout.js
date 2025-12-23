import MainHeader from "./components/main-header";

import './globals.css'

export const metadata = {
  title: "NextLevel Meals",
  description: "Delicious meals shared by our community"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="header-background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#59453c", stopOpacity: "1"}}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#bb9e8c", stopOpacity: "1"}}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
           d="M0,256L48,224C96,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,197.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        </div>
       <MainHeader />
        {children}
      </body>
    </html>
  );
}