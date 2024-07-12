"use client";

import Footer from "@/components/main-footer";
import NavbarCustom from "@/components/main-navbar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import { AuthProvider } from "./context/auth-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathnames = usePathname();

  const shouldShowNavbar =
    !pathnames.includes("/dashboard") && !pathnames.includes("/auth");

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {shouldShowNavbar ? (
            <>
              <NavbarCustom>{children}</NavbarCustom>
              <div className="w-full mt-10">
                <Footer />
              </div>
            </>
          ) : (
            children
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
