import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "components/common/Navbar";
import Tabs from "components/tabs/Tabs";
import HomeBackground from "components/home/HomeBackground";
import { useHomeContext } from "providers/home.provider";

export type Tab =
  | "about"
  | "projects"
  | "experience"
  | "skills"
  | "contact"
  | "virus"
  | "games"
  | "stats"
  | "all"
  | undefined;

type HomeProps = {
  itchViews: number | undefined;
  itchDownloads: number | undefined;
};

const Home = ({ itchViews, itchDownloads }: HomeProps) => {
  const [currentTab, setCurrentTab] = useState<Tab>(undefined);
  const { setStats } = useHomeContext();

  useEffect(() => {
    setStats({ itchViews, itchDownloads });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>dominikalk</title>
        <meta
          name="description"
          content="I'm a .NET developer based in the UK"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/code.svg" />
      </Head>
      <main className="bg-dark">
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <HomeBackground />
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </main>
    </>
  );
};

type Game = {
  views_count: number;
  downloads_count: number;
};

async function getGames(): Promise<Game[] | null> {
  const itchRes = await fetch(
    `${process.env.ITCH_IO_API_URL}${process.env.ITCH_IO_API_KEY}/my-games`
  );
  const itchData = await itchRes.json();

  if (itchData && itchRes.status === 200) return itchData.games;
  return null;
}

export async function getStaticProps() {
  const itchData = await getGames();

  let itchViews: number = 0;
  let itchDownloads: number = 0;

  if (itchData) {
    itchData.forEach((game: Game) => {
      itchViews += game.views_count;
      itchDownloads += game.downloads_count;
    });
  }

  return {
    props: {
      itchViews: !itchViews ? undefined : itchViews,
      itchDownloads: !itchDownloads ? undefined : itchDownloads,
    },
  };
}

export default Home;
