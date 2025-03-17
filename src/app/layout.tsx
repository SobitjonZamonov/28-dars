import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LikedProvider } from "./liked/context/LikedContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <body>
              <LikedProvider>{children}</LikedProvider>
          </body>
      </html>
  );
}
