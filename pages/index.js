import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apple Together</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <h1 className={styles.logo}>
          <Logo />
          <span>Apple Together</span>
        </h1>
        <h2 className={styles.title}>From #AppleToo to Apple Together</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h3>We Make Apple, Apple</h3>
          <p>
            At Apple, we make incredible products and services. We pour ourselves into that
            work, whether we are enriching customers&apos; lives at the Apple Store, animating rain for the next Keynote, plating lunch at Caffè Macs, or chatting with a customer to transfer their family videos from their iPhone to their MacBook.
          </p>
          <p>
            Apple prides itself on its commitment to diversity, equity, and an environment
            where everyone can do their best work. But Apple has fallen short of this goal for so many of our current and former teammates.
          </p>
          <p>
            We have gathered our hurt teammates together to give space to tell their
            stories. We are coming together to advocate for the changes we want to see at Apple.
          </p>
          <p>
            We&apos;ve organized internally on other important issues, too, and what we&apos;ve seen is
            that when we stand in solidarity, we can be the company we love and believe in.
          </p>
          <p>
            Apple celebrates its footprint of over 2.4 million workers. That&apos;s us: including more than 100,000 direct employees in the United States working under 22 executives.
          </p>
          <p>
            It&apos;s time to think equitable at Apple—together.
          </p>
          <nav>
            <ul className={styles.nav}>
              <li className={styles.resources}>
                <Link href="/resources">Resources</Link>
              </li>
              <li className={styles.connect}>
                <Link href="/connect">Connect</Link>
              </li>
            </ul>
          </nav>
          <small className={styles.small}>
            <a href="//appletoo.us/stories">#AppleToo Stories</a> • <a href="//appletoo.us/letter">#AppleToo Open Letter</a>
          </small>
        </div>
      </main>
    </div>
  )
}
