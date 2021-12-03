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
        <h1 className={styles.logo}>
          <a href="/"><Logo /></a>
          <span>Apple Together</span>
        </h1>
        <h2 className={styles.title}>Connect</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h3>Connect with Us</h3>
          <p>
              We've been using an application called <a href="https://discord.com/">Discord</a> to gather off of our virtual campus. We've shared our frustrations anonymously, and planned organizing more formally around shared concerns like Remote Work Advocacy.
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
                title="Ready to Organize" 
                image="disclosure-central"
                href="https://discord.gg/4cJ5tBr8YT"
                content="Join us in Disclosure Central. You'll need to be more formally verified, but we'll be discrete with your identity."
            />
          <nav>
            <ul className={styles.nav}>
              <li className={styles.resources}>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </nav>
          <small className={styles.small}>
            <a href="//appletoo.us/stories">#AppleToo Stories</a>
          </small>
        </div>
      </main>
    </div>
  )
}