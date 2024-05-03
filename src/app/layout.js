import { Signika, Leckerli_One } from "next/font/google";
import "./globals.css";
import MobNav from "@/components/shared/navForMobile/MobNav";
import TanstackProvider from "@/providers/TanstackProvider";
import { Chakra } from "@/providers/Chakra";
import TopBar from "@/components/shared/topBar/TopBar";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

const signika = Signika({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const leckerli = Leckerli_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Naba AI Junob | Grocery Shop",
  description: "Best grocery shop in saudi arabia",
};

export default function RootLayout({ children }) {
  return (
    <TanstackProvider>
      <html lang="en">
        <body className={`${signika.className} max-w-screen-2xl mx-auto`}>
          <Chakra>
              {/* Header */}
              <TopBar />
              <MobNav />
              <Navbar />
              {/* Main */}
              {children}
              {/* Footer */}
              <Footer />
          </Chakra>
        </body>
      </html>
    </TanstackProvider>
  );
}
