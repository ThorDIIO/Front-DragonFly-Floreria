"use client";

import { AuthProvider } from "../context/auth-context";
import ProtectedRoute from "../context/protected-routes";
import Header from "./components/general/Header";
import Sidebar from "./components/general/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Sidebar>
          <main className="bg-gray-100 min-h-screen">
            <Header />
            <div className="pt-2">{children}</div>
          </main>
        </Sidebar>
      </ProtectedRoute>
    </AuthProvider>
  );
}
