import "remixicon/fonts/remixicon.css";
import "./styles/globals.sass";

export const metadata = {
  title: "PORTFOLIO",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
