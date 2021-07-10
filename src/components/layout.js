import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import * as styles from './layout.module.css';

const Layout = ({ pageTitle, children}) => {
  const metaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main className={styles.container}>
      <title>{pageTitle} | {metaData.site.siteMetadata.title}</title>
      <p className={styles.siteTitle}>{metaData.site.siteMetadata.title}</p>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1 className={styles.heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;