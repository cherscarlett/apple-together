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
        <h1 className={styles.logo}>
          <a href="/"><Logo /></a>
          <span>Apple Together</span>
        </h1>
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
                content="The data collected from the survey that began in August of 2021. Please get the password from #talk-benefits in Slack."
            />
            <Card title="Salary Negotation Tool" 
                  image="salary-negotiation"
                  href="/Pay_Equity_Tools.zip"
                  download
                  content="This tool is intended only to provide a rough estimate of the salary for your role, if you are in the Bay area."
            />
            <Card 
                title="Press Advice" 
                image="press-advice"
                href="https://github.com/cherscarlett/it-happens-here-too/blob/main/press-advice.md"
                content="A collection of journalists we've vetted, and a list of advice in speaking out about workplace issues."
            />
            <Card 
                title="#AppleToo Open Letter"
                image="open-letter"
                href="https://appletoo.us/letter" 
                content="A list of workers' requests we wrote together and sent to Tim Cook and leadership in 2021, signed by 1,227 workers."
            />
          <nav>
            <ul className={styles.nav}>
              <li className={styles.connect}>
                <Link href="/connect">Connect</Link>
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
