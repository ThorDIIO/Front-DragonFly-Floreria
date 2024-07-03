"use client";

import Header from "./components/general/Header";
import Sidebar from "./components/general/Sidebar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <Sidebar>
            <main className="bg-gray-100 min-h-screen">
                <Header />
                <div className="pt-2">{children}</div>
            </main>
        </Sidebar>
    );
}
