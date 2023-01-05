import React, { useState } from "react";
import Head from "next/head";
import Navbar from "components/common/Navbar";
import Tabs from "components/tabs/Tabs";
import HomeBackground from "components/home/HomeBackground";
import HomeProvider from "components/home/home.provider";

export type Tab =
  | "about"
  | "projects"
  | "skills"
  | "contact"
  | "virus"
  | "games"
  | "stats"
  | "all"
  | undefined;

const Home = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(undefined);

  return (
    <HomeProvider>
      <Head>
        <title>dominikalk</title>
        <meta
          name="description"
          content="I'm a React and React native developer based in the UK"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/code.svg" />
      </Head>
      <main className="bg-dark">
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <HomeBackground />
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </main>
    </HomeProvider>
  );
};

export default Home;
