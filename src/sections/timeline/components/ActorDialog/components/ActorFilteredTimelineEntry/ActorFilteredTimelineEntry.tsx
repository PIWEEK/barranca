import { FiCrosshair } from 'react-icons/fi';
import type TimelineEventModel from '../../../../models/timeline.model';
import styles from './ActorFilteredTimelineEntry.module.css';

export default function ActorFilteredTimelineEntry({
  event,
  onNavigateToEvent,
}: {
  event: TimelineEventModel;
  onNavigateToEvent: (id: string) => void;
}) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.navigate}
        aria-label={`Navigate to event ${event.title}`}
        title={`Navigate to event ${event.title}`}
        onClick={() => onNavigateToEvent(event.id)}
      >
        <span className={styles.entryData}>
          <span>
            {new Date(event.time).toLocaleDateString('ca-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          <strong>{event.title}</strong>
        </span>
        <span className={styles.icon}>
          <FiCrosshair />
        </span>
      </button>
    </div>
  );
}
