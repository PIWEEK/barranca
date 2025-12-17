import styles from './EventLine.module.css';

export default function EventLineComponent() {
  return (
    <div className={styles['event-line']}>
      <div className={styles.line} />
      <div className={styles.marker} />
    </div>
  );
}
