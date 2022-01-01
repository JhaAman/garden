import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import StandardLayout from "../layout/StandardLayout";
import Meta from "../layout/Meta";
import { ReactElement } from "react";

const Home = () => {
  return <h1 className="text-3xl font-bold underline"> Hello world! </h1>;
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
