import React from "react";
import styles from '../styles/Card.module.css';
import Image from 'next/image';

export default function Card({title, content, image, href, download}) {
   
    return (
        <a className={styles.card} href={href} download={download}>
            <div data-icon={image} className={styles.icon}>
                <Image layout="fill" src={`/${image}.png`} />
            </div>
            <h4>{title}</h4>
            <p>{content}</p>
        </a>
    )
}