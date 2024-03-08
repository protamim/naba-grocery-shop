import { Signika } from "next/font/google";
import "./globals.css";
import MobNav from "@/components/shared/navForMobile/MobNav";
import TanstackProvider from "@/providers/TanstackProvider";
import { Chakra } from "@/providers/Chakra";

const signika = Signika({ subsets: ["latin"] });

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
            <MobNav />
            {children}
          </Chakra>
        </body>
      </html>
    </TanstackProvider>
  );
}
