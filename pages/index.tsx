import React, { useState } from "react";
import Head from "next/head";
import Navbar from "components/common/Navbar";
import Tabs from "components/tabs/Tabs";
import HomeBackground from "components/home/HomeBackground";

export type Tab =
  | "about"
  | "projects"
  | "skills"
  | "contact"
  | "virus"
  | undefined;

const Home = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(undefined);

  return (
    <>
      <Head>
        <title>dominikalk</title>
        <meta name="description" content="Hi! I'm Dominik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-dark">
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <HomeBackground />
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </main>
    </>
  );
};

export default Home;
