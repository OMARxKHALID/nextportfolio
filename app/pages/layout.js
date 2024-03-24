import { Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./styles/globals.sass";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "portfolioNEXT",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
