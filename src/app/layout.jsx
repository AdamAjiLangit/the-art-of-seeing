import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Art of Seeing",
  description: "A collection of projects that explore the art of seeing.",
  image: "https://img.freepik.com/free-vector/online-dating-matching-greek-god-statue-aesthetic-social-media-post_53876-114651.jpg?t=st=1742864703~exp",
  url: "https://the-art-of-seeing.vercel.app",
  type: "website",
  siteName: "The Art of Seeing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
