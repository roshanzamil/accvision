
import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Blog1 from "@/components/blog/Blog1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Accvision Blog | Accounting, Tax & Business Insights</title>
        <meta name="description" content="Read our blog for the latest perspectives on accounting, tax, and business strategy. We are passionate about making financial knowledge accessible to everyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <Blog1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Blog;
