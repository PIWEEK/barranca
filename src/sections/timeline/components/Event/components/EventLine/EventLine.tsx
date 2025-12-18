import styles from './EventLine.module.css';

export default function EventLineComponent({ isFirst }: { isFirst: boolean }) {
  return (
    <div className={styles['event-line'] + (isFirst ? ` ${styles.first}` : '')}>
      <div className={styles.line} />
      <div className={styles.marker} />
    </div>
  );
}
