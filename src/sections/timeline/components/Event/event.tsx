import { useEffect, useRef } from 'react';
import { useOnScreen } from '../../../../hooks/useOnScreen';
import type EventComponentProps from './event.model';
import styles from './event.module.css';

export default function EventComponent({ event, onVisible }: EventComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.5 });

  useEffect(() => {
    if (isVisible && onVisible) {
      onVisible(event.time, event.title);
    }
  }, [isVisible, onVisible, event.time, event.title]);

  return (
    <article ref={ref} className={styles.event}>
      <div className="content">
        <p>{event.time} </p>
        <h2>{event.title}</h2>
        <p>{event.content}</p>
      </div>
    </article>
  );
}
