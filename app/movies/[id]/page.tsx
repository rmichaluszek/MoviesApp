import styles from './page.module.css'

export default function Movie({ params } : { params: { id : string }}) {
  return (
    <main className={styles.main}>
        Hello Movies ID: {params.id}!
    </main>
  )
}
