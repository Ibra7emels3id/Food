'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { Store } from "../lib/store";
import AuthProvider from "./Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Provider store={Store}>
                        <Header />
                        <main>
                            <ToastContainer />
                            {children}
                        </main>
                        <Footer />
                    </Provider>
                </AuthProvider>
            </body>
        </html>
    );
}
