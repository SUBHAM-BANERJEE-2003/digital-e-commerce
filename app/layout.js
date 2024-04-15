import { Outfit } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "NextGen Courses",
  description: "Learn the latest technologies with our courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
