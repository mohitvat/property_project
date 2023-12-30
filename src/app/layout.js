import { Inter } from 'next/font/google'
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Greystone Properties & Developments",
  description: "Greystone Properties & Developments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://c.animaapp.com/iUpDz7wD/img/logo-1-2@2x.png"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
