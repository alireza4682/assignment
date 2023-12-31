import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { i18n } from "../../i18n-config";
import localFont from "next/font/local";
import Navbar from "./components/navbar";
import { Providers } from "./components/providers";

const IranSans = localFont({
  src: "../../public/fonts/Sans a4fran3.woff",
});

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "fa" };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={params.lang === "en" ? roboto.className : IranSans.className}
      >
        <Providers>
          <div className="h-screen w-screen bg-background">
            <Navbar params={params} />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
