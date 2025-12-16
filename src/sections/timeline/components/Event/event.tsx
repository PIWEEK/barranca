import type { TimelineEventModel } from '../../models/timeline.model';

import styles from './event.module.css';

export default function EventComponent({ event }: { event: TimelineEventModel }) {
  return (
    <article className={styles.event}>
      <div className="content">
        <p>{event.time} </p>
        <h2>{event.title}</h2>
        <p>{event.content}</p>
      </div>
    </article>
  );
}
