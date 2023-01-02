import Head from "next/head";
import React from "react";
import Wrapper from "components/common/Wrapper";
import Card from "components/common/Card";

const Home = () => {
  return (
    <>
      <Head>
        <title>dominikalk</title>
        <meta name="description" content="Hi! I'm Dominik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Card
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quae doloremque, dolorum temporibus labore assumenda quam sit iste saepe ipsam."
          className="w-80"
        /> */}
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
        </div>
        {/* Secondary Page */}
        <div className="bg-dark2 w-full">
          <Wrapper className="py-4">
            <h3 className="text-2xl text-white">About Me</h3>
          </Wrapper>
        </div>
      </main>
    </>
  );
};

export default Home;
