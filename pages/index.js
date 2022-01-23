import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

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
        {/* <h2 className={styles.title}>From #AppleToo to Apple Together</h2> */}
      </header>
      { isBannerVisible &&
        <div className={styles.banner}>
          <Link href="/shareholders">
              <a>
                <h3>Hello, Apple Shareholders!</h3> 
                <span>(if you owned vested AAPL stock as of January 3rd 2022, that’s you!)</span>
                <div>
                  <p>We’d like to draw attention to the upcoming annual meeting of shareholders and the fact that you have a say in the way the company operates.</p>
                  <p>There are a number of important shareholder proposals to vote on this year, and the recommendations of the workers are aligned with human rights.</p>
                  <strong>
                    Read our recommendations &gt;
                  </strong>
                </div>
              </a>
          </Link>
          <div className={styles.close} onClick={() => setIsBannerVisible(false)}>[X] Close</div>
        </div>
      }
      <main className={styles.main}>
        <div className={styles.content}>
          <h3>We Make Apple, Apple</h3>
          <p>
            At Apple, we make incredible products and services. We pour ourselves into that work, whether we are enriching customers&apos; lives at the Apple Store, animating rain for the next Keynote, plating lunch at Caffè Macs, or chatting with a customer to transfer their family videos from their iPhone to their MacBook.
          </p>
          <p>
            Apple prides itself on its commitment to diversity, equity, and an environment where everyone can do their best work. But Apple has fallen short of this goal for so many of our current and former teammates, so we made space to share those stories with #AppleToo.
          </p>
          <p>
            In Slack, we have written letters together to make requests of our leadership. However, we&apos;re seeing an increase of rules restricting our ability to continue collaborating on workplace issues that are important to us. We&apos;re making our own space off of our virtual campus to ensure our voices can still be heard.
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
            <Link href="/shareholders">Shareholder Vote Guide</Link>  •  <a href="//appletoo.us/stories">#AppleToo Stories</a>  •  <a href="//appletoo.us/letter">#AppleToo Open Letter</a>
          </small>
        </div>
      </main>
    </div>
  )
}
