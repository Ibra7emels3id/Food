'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { Store } from "../lib/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
            <html lang="en">
                <body className={inter.className}>
                    <Provider store={Store}>
                        <Header />
                        <main>
                            {children}
                        </main>
                        <Footer />  
                    </Provider>
                </body>
            </html>
    );
}
