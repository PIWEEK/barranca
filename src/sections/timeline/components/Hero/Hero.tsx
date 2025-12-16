import styles from './Hero.module.css';

export default function HeroComponent() {
  return (
    <main className={styles.hero}>
      <div className={styles.intro}>
        <h1 className={styles.title}>La barrancà</h1>
        <div className={styles.description}>
          <p>
            A finals d'octubre de 2024, una DANA va provocar una pluja torrencial que va deixar{' '}
            <strong>229 morts</strong>.
          </p>
          <p>
            Aquesta línia de temps interactiva mostra pas a pas les decisions i errades que van
            transformar una simple previsió en una de les pitjors tragèdies del País Valencià.
          </p>
        </div>
      </div>
    </main>
  );
}
