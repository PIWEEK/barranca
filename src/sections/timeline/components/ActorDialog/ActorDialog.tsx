import { forwardRef } from 'react';
import type ActorModel from '../../models/actors.model';
import styles from './ActorDialog.module.css';
import AvatarComponent from '../../../../components/Avatar/Avatar';
import { useTimeline } from '../../../../hooks/useTimeline';
import type TimelineEventModel from '../../models/timeline.model';
import ActorFilteredTimelineEntry from './components/ActorFilteredTimelineEntry/ActorFilteredTimelineEntry';

interface ActorDialogProps {
  actor: ActorModel;
  event?: TimelineEventModel;
}

const ActorDialog = forwardRef<HTMLDialogElement, ActorDialogProps>(({ actor, event }, ref) => {
  const dialogRef = ref as React.RefObject<HTMLDialogElement | null>;
  const { getEventsByActorId } = useTimeline();

  const actorEvents = getEventsByActorId(actor.id);
  const actorEventsFiltered = actorEvents
    ? actorEvents.filter((e) => e.id !== event?.id)
    : actorEvents;

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const navigateToEvent = (id: string) => {
    closeDialog();
    scrollToEvent(id);
  };

  const scrollToEvent = (id: string) => {
    const eventElement = document.getElementById(id);
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <button autoFocus className={styles.closeButton} onClick={closeDialog} aria-label="Tancar">
        ×
      </button>
      <div className={styles.wrapper}>
        <div className={styles['data-wrapper']}>
          <AvatarComponent actor={actor} size="l" shape="square" />
          <div className={styles.data}>
            <h2>{actor.name}</h2>
            <p className={styles.position}>{actor.position}</p>
            <p className={styles.description}>{actor.description}</p>
            {/* <div>Participava al CECOPI? {actor.cecopi ? 'Sí' : 'No'}</div> */}
          </div>
        </div>
        {actorEventsFiltered && actorEventsFiltered.length > 0 && (
          <div className={styles.timeline}>
            <h3>Timeline</h3>
            <ul className={styles.eventList}>
              {actorEventsFiltered.map((event) => (
                <li className={styles.eventListItem} key={event.id}>
                  <ActorFilteredTimelineEntry event={event} onNavigateToEvent={navigateToEvent} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </dialog>
  );
});

export default ActorDialog;
