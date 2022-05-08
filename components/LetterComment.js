import React from "react";
import styles from '../styles/LetterComment.module.css';

export default function Card({comment, company}) {
    return (
        <blockquote className={styles.lettercomment}>
            {comment}
            <div className={styles.author}>{company}</div>
        </blockquote>
    )
}