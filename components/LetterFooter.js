import React from "react";
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import FooterLinks from '../components/FooterLinks';
import { Widget } from '@typeform/embed-react'
import Card from '../components/Card';

export default function LetterFooter() {
    return (
        <>
        <div className={styles.surveycount}>
            <p className={styles.count}>2057</p>
            <p className={styles.text}>Signatures</p>
            <p className={styles.applecount}>1043 from current and former Apple employees</p>
            <span>Please sign below, we&apos;ll update the survey count manually from time to time based on the responses we get.</span>
        </div>

        <div className={styles.presurveybox}>
          We would like to ask you to show your support for location-flexible work and speak out against inflexible workplace policies by filling out the following survey.
      </div>

      <Widget id="KAVtm8qc" className={styles.typeformbox} />

      <p>
        <Link href="thoughts-on-office-bound-work-responses">Responses from other signees</Link>
      </p>

      <p>
            Thank you for your support! If you work at Apple, we&apos;d like to invite you to our <a href="https://discord.com/">Discord</a> servers below. 
            Discord is very similar to Slack, but our servers are not controlled by Apple so we can speak more openly and came together to share our frustrations anonymously, and plan organizing more formally around shared concerns like Remote Work Advocacy.

            If are a current Apple worker and you do not feel comfortable joining our Discord servers, yet, consider joining the #remote-work-advocacy Slack channel (not accessible to all workspaces). 
      </p>
      <Card 
            title="Anonymously Socialize" 
            image="apple-connect"
            href="https://discord.gg/SStTx9M"
            content="For all Apple, current and former. You will be anonymously verified, but remember, nothing Apple Confidential, please!" 
        />
      <Card 
          title="Gather Around Issues" 
          image="disclosure-central"
          href="https://discord.gg/RYwNxYFm7c"
          content="Current Apple; no managers or HR. You'll need to be more formally verified, but we'll be discreet with your identity."
      />


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
      <FooterLinks />
      </>
    )
}