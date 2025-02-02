import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "bitmovin-player-ui/dist/css/bitmovinplayer-ui.css";

import { TopHeader } from "@/components/organisms";

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 600 900",
});

const nunitoSans = localFont({
  src: "./fonts/NunitoSans.ttf",
  variable: "--font-nunito-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${inter.className} antialiased`}
      >
        <TopHeader />
        {children}
        <footer className="py-4 border-t border-[#292929] mt-12">
          <div className="container mx-auto">
            <div className="flex items-center justify-center lg:justify-between text-xs">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <span className="text-sm">© Flow 2023</span>
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos de Uso</a>
              </div>
              <div className="hidden lg:flex items-center gap-3">
                <p>Desenvolvido por <strong>Netshow.me</strong></p>
                <span className="px-2 bg-[#EE3965] text-white font-semibold uppercase rounded-sm">Beta</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
