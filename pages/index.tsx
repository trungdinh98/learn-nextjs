import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import menu from '../styles/Menu.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tru Dinh | Personal Blog</title>
        <meta name="description" content="Who is Tru?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>This is header</header>

      <main className={styles.main}>
        <div className={menu.menu}>
          <div className={menu.title}>MENU</div>
          <ul className={menu.nav}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Tru</a>
              </Link>
            </li>
            <li>
              <Link href="/fortfolio">
                <a>Fortfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Tru</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://truworld.vercel.app">My world!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
