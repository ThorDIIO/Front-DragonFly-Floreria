"use client";

import Footer from "@/components/main-footer";
import NavbarCustom from "@/components/main-navbar";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import "./globals.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathnames = usePathname();

  const shouldShowNavbar = !pathnames.includes("/auth");

  return (
    <html lang="en">
      <body className={inter.className}>
        {shouldShowNavbar ? (
          <>
            <NavbarCustom>{children}</NavbarCustom> <Footer />
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
