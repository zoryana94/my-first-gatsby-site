import React from 'react';
import { StaticImage  } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby site</h1>
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="Gatsby"
        src="../images/icon.png"
      />
    </Layout>
  );
};

export default HomePage;