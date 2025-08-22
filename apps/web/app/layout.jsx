import { Outfit,Ovo} from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const outfit = Outfit({
  subsets: ["latin"],weight: ["400" ,"500","600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],weight: ["400" ],
});

export const metadata = {
  title: "Ibtisam portfolio",
  description: "You can see my information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
       <body
        className={`${outfit.className} ${ovo.className} antialiased bg-cover bg-center bg-no-repeat `}
        style={{ backgroundImage:"url('/bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          margin: 0
         }}
      >
        <Navbar/>
        <main className="flex-grow">

        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
