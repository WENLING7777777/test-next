import React from 'react'
import styles from '@/styles/card.module.css'

export default function Card() {
    return (
        <div className={styles.card}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                <circle cx="23" cy="22.5" r="22.5" fill="#D9D9D9" />
            </svg>
            <h5>Youtube</h5>
        </div>
    )
}
