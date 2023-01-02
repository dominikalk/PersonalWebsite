import Head from "next/head";
import React from "react";
import Wrapper from "components/common/Wrapper";
import Card from "components/common/Card";
import Image from "next/image";
import profilePic from "public/images/profile.jpeg";

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
          <Wrapper>
            <div className="py-10 flex">
              <div className="w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl text-white mb-4">About Me</h3>
                <p className="text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                  exercitationem eaque voluptatem libero, totam voluptate
                  accusamus nobis temporibus in atque tempore omnis animi cumque
                  perspiciatis aut excepturi perferendis cum. Nesciunt omnis
                  porro sed quo voluptatem fugit optio temporibus? Consequuntur
                  pariatur sed obcaecati ex labore cupiditate nisi nemo totam
                  temporibus sunt!
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  src={profilePic}
                  alt="Profile"
                  className="w-3/4 rounded-xl h-auto ml-auto"
                />
              </div>
            </div>
            {/* <div className="w-full py-10"></div> */}
          </Wrapper>
        </div>
      </main>
    </>
  );
};

export default Home;
