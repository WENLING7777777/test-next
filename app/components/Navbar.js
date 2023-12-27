import React from 'react';
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles['icon-g']}>
        <Link className={styles.link} href="/gmail">Gmail</Link>
        <Link className={styles.link}  href="/picture">圖片</Link>
        <Link className={styles.r} href="/r"></Link>
        <Link className={styles.c} href="/c"></Link>
      </div>
    </div>
  );
}
