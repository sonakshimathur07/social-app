import { Geist, Geist_Mono, Inter } from "next/font/google"; // Ensure Inter is imported
import "./globals.css";
import Header from "./components/Header";
import SessionWrapper from "./components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define `inter` properly in the module scope
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Social App",
  description: "Social App built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
          <Header />
          {children}
      </body>
    </html>
      </SessionWrapper>
  );
}
