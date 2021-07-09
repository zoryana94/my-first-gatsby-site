import * as React from 'react';
import { Link } from 'gatsby';

import * as styles from './layout.module.css';

const Layout = ({ pageTitle, children}) => {
  return (
    <main className={styles.container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/">Home</Link>
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