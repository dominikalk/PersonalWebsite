import Head from "next/head";
import React from "react";
import Wrapper from "components/common/Wrapper";

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
        {/* Front Page */}
        <div className="bg-dark w-full h-screen flex justify-center items-center">
          <div>
            <h1 className="text-primary text-center text-4xl mb-4">
              Hi! I'm Dominik
            </h1>
            <h3 className="text-white text-center text-2xl">
              I'm a React and React native developer based in the UK
            </h3>
          </div>
        </div>
        <div className="bg-tertiary w-full">
          <Wrapper className="py-4">
            <h3 className="text-2xl text-white">About Me</h3>
          </Wrapper>
        </div>
      </main>
    </>
  );
};

export default Home;
