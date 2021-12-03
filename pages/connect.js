import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import Logo from '../components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apple Together: Connect</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Link href="/">
            <h1 className={styles.logo}>
                <Logo />
                <span>Apple Together</span>
            </h1>
        </Link>
        <h2 className={styles.title}>Connect</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <p>
              We&apos;ve been using an application called <a href="https://discord.com/">Discord</a> (like Slack) to gather off of our virtual campus. We&apos;ve shared our frustrations anonymously, and planned organizing more formally around shared concerns like Remote Work Advocacy.
          </p>
          <p>
              All Apple workers are welcome to join us in either one, but we will need to vet that you are an Apple worker.
          </p>
          <Card 
                title="Anonymously Socialize" 
                image="apple-connect"
                href="https://discord.gg/SStTx9M"
                content="Join us in Apple Connect. You will be anonymously verified, but remember, nothing Apple Confidential, please!" 
            />
            <Card 
                title="Gather Around Issues" 
                image="disclosure-central"
                href="https://discord.gg/4cJ5tBr8YT"
                content="Join us in Disclosure Central. You'll need to be more formally verified, but we'll be discreet with your identity."
            />
            <Card 
                title="Share Your Story" 
                href="https://appletoo.us"
                image="apple-too"
                wide
                content="You can still submit a story to #AppleToo, and it will be shared publicly (or not) depending on the level of consent you choose. Stories will continue to be digested in batches of 5 as we receive them."
            />
          <nav>
            <ul className={styles.nav}>
              <li className={styles.resources}>
                <Link href="/resources">Resources</Link>
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
