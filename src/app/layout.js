import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopSerchBar from "@/components/shared/topSerchBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vastora ।। sprots",
  description: "vastora orbit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="container mx-auto"> */}

        <TopSerchBar></TopSerchBar>
        {/* </div> */}
        {children}
      </body>
    </html>
  );
}
