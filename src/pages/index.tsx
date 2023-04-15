import Head from "next/head";
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Contributors from "@/components/Contributors";
import Organizations from "@/components/Organizations";
import Testimonials from "@/components/Testimonials";
import Sponsors from "@/components/Sponsors";
import WallofLove from "@/components/WallofLove";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Solcoders - Home</title>
        <meta name="description" content="Solcoders's home page." />
      </Head>
      <Header />
      <HeroSection />
      <Contributors />
      <Organizations />
      <Testimonials />
      <Sponsors />
      <WallofLove />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
