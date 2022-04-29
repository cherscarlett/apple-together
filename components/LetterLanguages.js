import React from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Logo from '../components/Logo';
import Link from 'next/link';
import FooterLinks from '../components/FooterLinks';
import { Widget } from '@typeform/embed-react'
import Card from '../components/Card';

export default function LetterLanguages() {
    return (
        <div className={styles.letterlanguages}>
          <Link href="thoughts-on-office-bound-work-de">Deutsch</Link>
          <Link href="thoughts-on-office-bound-work">English</Link>
          <Link href="thoughts-on-office-bound-work-es">Español</Link>
          {/*<Link href="thoughts-on-office-bound-work-fr">Français</Link>*/}
          <Link href="thoughts-on-office-bound-work-pt">Português</Link>
        </div>
    )
}