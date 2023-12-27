import Card from '@/styles/card.module.css'
import Bar from '@/styles/bar.module.css'
import styles from '@/styles/home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
      <h1 style={{ color: '#4491f0', fontSize: '70px' }}>Google</h1>
        <Bar />
        <div className={styles.cardG}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
