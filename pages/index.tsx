import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import menu from '../styles/Menu.module.scss';
import headercss from '../styles/Header.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tru Dinh | Personal Blog</title>
        <meta name="description" content="Who is Tru?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <header>
        <div className={headercss.header}>
          <div className={headercss.info}>
            <h4>
              <a href="https://www.linkedin.com/in/trungdinhba/">
                FULL-STACK DEVELOPER
              </a>
            </h4>
            <h1>
              <a
                href="https://truworld.vercel.app"
                style={{ textTransform: 'uppercase' }}
              >
                Welcome to My world!
              </a>
            </h1>
            <div className={headercss.meta}>
              <a
                href="https://www.linkedin.com/in/trungdinhba/"
                target="_b"
                className={headercss.author}
              ></a>
              <br />
              <a href="https://www.linkedin.com/in/trungdinhba/" target="_b">
                Tru Dinh
              </a>{' '}
              on Jul 20, 2022
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>This is title</h1>
        <section className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl
            turpis, porttitor et finibus id, viverra a metus. Praesent non ante
            sed orci posuere varius quis sit amet dui. Cras molestie magna orci,
            id gravida dolor molestie in. Duis sollicitudin turpis quis tortor
            egestas, ut ultrices nisl elementum. Vestibulum sed ipsum eget nulla
            laoreet cursus in ac sem. Integer a suscipit justo, quis aliquam
            sapien. Maecenas et tellus nibh. Vivamus tincidunt eros id commodo
            pellentesque. ed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>
        </section>
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
