import Head from 'next/head';

import CtaBand from '../components/CtaBand/CtaBand';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { site } from '../constants/constants';


const Home = () => {
  return (

    <Layout>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <link rel="canonical" href={site.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:url" content={site.url} />
        <meta property="og:image" content={`${site.url}/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Hero />
      <Projects />
      <Technologies />
      <Experience />
      <CtaBand />
    </Layout>

  );
};



export default Home;
