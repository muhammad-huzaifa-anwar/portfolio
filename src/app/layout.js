import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-neutral-900  `}>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <footer id="contact" className="bg-gray-900 text-white border-t border-neutral-200/60 dark:border-neutral-800 py-8 w-full">
          <div className="px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm w-full">
            <div>M Huzaifa Anwar.</div>
            <div className="flex items-center gap-4">
              <a href="mailto:muhammadhuzaifa2544@gmail" className="hover:opacity-80 text-white">Email</a>
              <a href="tel:03102174111" className="hover:opacity-80 text-white">Phone</a>
              <a href="https://github.com/muhammad-huzaifa-anwar" target="_blank" rel="noreferrer" className="hover:opacity-80 text-white">GitHub</a>
              <a href="https://www.linkedin.com/in/m-huzaifa-anwar-5b8b3626b/" target="_blank" rel="noreferrer" className="hover:opacity-80 text-white">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </body>
  </html>
);

export default RootLayout;
