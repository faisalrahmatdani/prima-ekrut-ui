import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../src/components/layouts";
import Banner from "../src/components/organisms/banner";
import HomeContent from "../src/components/organisms/homeContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <HomeContent />
      </Layout>
    </>
  );
}
