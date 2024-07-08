import { Outfit } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "NextGen Courses",
  description: "Learn the latest technologies with our courses",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <link rel="icon" href="/logo.svg" sizes="any"/>
        <ThemeProvider defaultTheme="system" attribute="class">
        <body className={outfit.className}>
          <Header/>
          {children}
          <Footer/>
        </body>
        </ThemeProvider>  
      </html>
  );
}
