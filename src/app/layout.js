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
           
            ></path>
        </svg>
        </div>
        {children}
      </body>
    </html>
  );
}