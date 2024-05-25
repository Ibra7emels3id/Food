
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import About from "../components/About";


export default function Home() {
    return (
        <>
            <HeroSection />
            <Products />
            <About/>
        </>
    );
}