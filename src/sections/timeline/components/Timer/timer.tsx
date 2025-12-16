import type DateProps from './timer.model';
import styles from './timer.module.css';

export default function TimerComponent({ date, warning = false }: DateProps) {
  const formatDate = (): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    return dateObj.toLocaleDateString('ca-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    return dateObj.toLocaleTimeString('ca-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <aside className={styles.timer}>
      <span className={styles.date}>{formatDate()}</span>
      <span className={styles.time + (warning ? ` ${styles.warning}` : '')}>{formatTime()}</span>
    </aside>
  );
}
