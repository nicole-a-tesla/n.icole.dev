import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GithubSVG from "../components/svgs/github";
import LinkedInSVG from "../components/svgs/linkedin";
import EmailSVG from "../components/svgs/email";

const Home: NextPage = () => {
  ;

  return (
      <div className="bg-pink h-screen w-screen">
      <Head>
        <title>n.icole.dev</title>
        <meta name="Hey" content="hey" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="/dist/output.css" rel="stylesheet"/>
      </Head>

      <main>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl mt-5 mb-5">Hey, I'm Nicole</h1>
          <img className="w-2/4	max-w-md mb-5" src="/262676_SB4adn8l.png"/>
          <p className="text-xl mb-5">a software engineer living in Edinburgh.</p>

          <div>
            <ul className="flex justify-center">
              <li className="text-xl underline hover:text-(--purple)">
                <a href="https://nicole-a-tesla.github.io/set-game">play set</a>
              </li>
            </ul>
            <ul className="flex">
              <li className="m-3">
                <a href="https://github.com/nicole-a-tesla" target="_blank">
                  <GithubSVG />
                </a>
              </li>
              <li className="m-3">
                <a href="https://www.linkedin.com/in/nicoleamccabe" target="_blank">
                  <LinkedInSVG />
                </a>
              </li>
              <li className="m-3">
                <a href="mailto:nicole.ashley.mccabe@gmail.com" target="_blank">
                  <EmailSVG />
                </a>
              </li>
            </ul>
          </div>

        </div>

      </main>

    </div>
  );
};

export default Home;
