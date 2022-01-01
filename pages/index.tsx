import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import StandardLayout from "../layout/StandardLayout";
import Meta from "../layout/Meta";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
      {/* Hero */}

      <div className="flex flex-row relative">
        {/* Left */}
        <div className="flex h-screen w-1/3 bg-primary-500 relative">
          {/* A square box  */}
          <div className="absolute top-1/4 left-1/2 z-10 w-96 h-96 ">
            <Image
              src="/static/profile.jpg"
              alt="Aman"
              layout="fill"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex min-h-screen justify-center flex-1 bg-bg relative ">
          <div className="flex flex-col items-end justify-center">
            <h1 className="text-4xl ">Aman Jha</h1>
            <h2 className="text-xl mt-2">Full Stack Freelancer</h2>
            <h3 className="mt-2 opacity-80">Next.js. React. AWS. SQL.</h3>
          </div>
        </div>

        {/* /public/static/profile.png sits right in the middle of the two divs */}
      </div>
      <div className="bg-bg2 h-screen">heddo</div>
    </>
  );
};

// Attach the landing layout (and other nested layouts) to the page
Home.getLayout = (page: ReactElement) => {
  return (
    // Attach the Landing layout with a meta component, decide on header/footer
    <StandardLayout
      meta={
        <Meta
          title="Rosie"
          description="Get answers for any React questions instantly"
        />
      }
      headerActive={true}
      footerActive={true}
    >
      {page}
    </StandardLayout>
  );
};

export default Home;
