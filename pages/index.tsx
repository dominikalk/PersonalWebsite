import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "components/common/Navbar";
import AppIcon from "components/common/AppIcon";
import AboutMeCard from "components/tabs/AboutMeCard";
import ProjectsCard from "components/tabs/ProjectsCard";
import VirusCard from "components/tabs/VirusCard";
import ContactCard from "components/tabs/ContactCard";
import SkillsCard from "components/tabs/SkillsCard";
import { readFileSync } from "node:fs";
import { background_code } from "public/backgroundCode";

type tab = "about" | "projects" | "skills" | "contact" | "virus" | undefined;

const Home = () => {
  const [currentTab, setCurrentTab] = useState<tab>(undefined);
  // const [backgroundCode, setBackgroundCode] = useState<string[]>([]);

  // useEffect(() => {
  //   const contents = readFileSync("public/background_code.txt", "utf-8");
  //   const arr = contents.split(/\r?\n/);
  //   setBackgroundCode(arr);
  // }, []);

  const handleGithubClicked = () => {
    window.open("https://github.com/dominikalk", "_blank");
  };

  return (
    <>
      <Head>
        <title>dominikalk</title>
        <meta name="description" content="Hi! I'm Dominik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className="absolute inset-0 overflow-hidden font-fasthand text-white opacity-20 text-lg text-justify">
          {background_code}
        </p>
        <div className="absolute inset-0 flex justify-center items-center">
          {currentTab == "about" && (
            <AboutMeCard
              onClose={() => setCurrentTab(undefined)}
              className="w-3/5 mb-20"
            />
          )}
          {currentTab == "projects" && (
            <ProjectsCard
              onClose={() => setCurrentTab(undefined)}
              className="w-3/5 mb-20"
            />
          )}
          {currentTab == "skills" && (
            <SkillsCard
              onClose={() => setCurrentTab(undefined)}
              className="w-3/5 mb-20"
            />
          )}
          {currentTab == "contact" && (
            <ContactCard
              onClose={() => setCurrentTab(undefined)}
              className="w-3/5 mb-20"
            />
          )}
          {currentTab == "virus" && (
            <VirusCard
              onClose={() => setCurrentTab(undefined)}
              className="w-2/5 mb-20"
            />
          )}
        </div>
        {/* Front Page */}
        <div className="bg-dark w-full h-screen flex justify-center items-center">
          <div>
            <h1 className="text-primary text-center text-4xl mb-4 font-typewriter">
              Hi! I'm Dominik
            </h1>
            <h3 className="text-white text-center text-2xl font-typewriter">
              I'm a React and React native developer based in the UK
            </h3>
          </div>
          <Navbar>
            <AppIcon
              name="About Me"
              icon="/icons/user.svg"
              active={currentTab == "about"}
              onClick={() =>
                setCurrentTab(currentTab == "about" ? undefined : "about")
              }
            />
            <AppIcon
              name="Projects"
              icon="/icons/code.svg"
              active={currentTab == "projects"}
              onClick={() =>
                setCurrentTab(currentTab == "projects" ? undefined : "projects")
              }
            />
            <AppIcon
              name="Skills"
              icon="/icons/lightbulb.svg"
              active={currentTab == "skills"}
              onClick={() =>
                setCurrentTab(currentTab == "skills" ? undefined : "skills")
              }
            />
            <AppIcon
              name="Contact"
              icon="/icons/envelope.svg"
              active={currentTab == "contact"}
              onClick={() =>
                setCurrentTab(currentTab == "contact" ? undefined : "contact")
              }
            />
            <AppIcon
              name="GitHub"
              icon="/icons/github.svg"
              onClick={() => handleGithubClicked()}
            />
            <AppIcon
              name="Don't Click This"
              icon="/icons/question.svg"
              active={currentTab == "virus"}
              onClick={() =>
                setCurrentTab(currentTab == "virus" ? undefined : "virus")
              }
            />
          </Navbar>
        </div>
      </main>
    </>
  );
};

export default Home;
