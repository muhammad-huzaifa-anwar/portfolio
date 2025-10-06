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
              <a href="mailto:muhammadhuzaifa2544@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Huzaifa,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0APlease%20let%20me%20know%20if%20you%20are%20available%20for%20discussion.%0D%0A%0D%0ABest%20regards," className="hover:opacity-80 text-white">Email</a>
              <a href="tel:03141155677" className="hover:opacity-80 text-white">Phone</a>
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
