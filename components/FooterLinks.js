import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function FooterLinks() {
    return (
        <footer className={styles.small}>
            <Link href="/hotnews/thoughts-on-office-bound-work">Thoughts on Office-bound Work</Link>
            
            <Link href="/shareholders">Shareholder Vote Guide</Link>
            <a href="//appletoo.us/stories">#AppleToo Stories</a>
            <a href="//appletoo.us/letter">#AppleToo Open Letter</a>
        </footer>
    )
}