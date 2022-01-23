import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import Logo from '../components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apple Together: Resources</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
      <Link passHref href="/">
        <h1 className={styles.logo}>
          <Logo />
          <span>Apple Together</span>
        </h1>
      </Link>
        <h2 className={styles.title}>Resources</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
            <Card 
                title="Funds for Organizers" 
                image="solidarity-fund"
                href="https://coworkerfund.org/netflixapplefund/"
                content="If you take action to organize and improve Apple, you qualify for financial assistance from the Solidarity Fund." 
            />
            <Card 
                title="Tech Worker Handbook" 
                image="tech-worker-handbook"
                href="https://techworkerhandbook.org/"
                content="A collection of resources for workers to make informed decisions in speaking out on unlawful or unethical conduct."
            />
            <Card 
                title="Wage Transparency Data" 
                image="wage-transparency"
                href="https://docs.google.com/spreadsheets/d/117puEC8mtxH8Ui90qToIvLQ31VOtFN7J5LwfHHlGZn0/"
                content="The data collected from the survey in August of 2021. To add data, get the password from #talk-benefits in Slack."
            />
            <Card title="Salary Negotation Tool" 
                  image="salary-negotiation"
                  href="/Pay_Equity_Tools.zip"
                  download
                  content="This tool is intended only to provide a rough estimate of the salary for your role if you are in the Bay area."
            />
            <Card 
                title="Press Advice" 
                image="press-advice"
                href="https://github.com/cherscarlett/it-happens-here-too/blob/main/press-advice.md"
                content="A collection of journalists we've vetted, and a list of advice in speaking out about workplace issues."
            />
            <Card 
                title="Legal Resources"
                image="legal-resources"
                href="https://github.com/cherscarlett/it-happens-here-too/blob/main/legal-resources.md" 
                content="A compilation of crowd-sourced labor attorneys and information about national and international governing entities."
            />
          <nav>
            <ul className={styles.nav}>
              <li className={styles.connect}>
                <Link href="/connect">Connect</Link>
              </li>
            </ul>
          </nav>
          <small className={styles.small}>
          <Link href="/shareholders">Shareholder Vote Guide</Link>  •  <a href="//appletoo.us/stories">#AppleToo Stories</a> • <a href="//appletoo.us/letter">#AppleToo Open Letter</a>
          </small>
        </div>
      </main>
    </div>
  )
}
