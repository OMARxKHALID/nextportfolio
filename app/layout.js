import { Roboto_Mono } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./styles/globals.sass";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  icon: "/favicon.ico",
  title: "PORTFOLIO",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
