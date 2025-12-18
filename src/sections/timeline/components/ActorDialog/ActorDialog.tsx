import { forwardRef, useState } from 'react';
import type ActorModel from '../../models/actors.model';
import styles from './ActorDialog.module.css';
import AvatarComponent from '../Event/components/EventCard/components/ActorAvatar/components/Avatar/Avatar';
import { useTimeline } from '../../../../hooks/useTimeline';

interface ActorDialogProps {
  actor: ActorModel;
}

type visibleTabType = 'data' | 'timeline';

const ActorDialog = forwardRef<HTMLDialogElement, ActorDialogProps>(({ actor }, ref) => {
  const dialogRef = ref as React.RefObject<HTMLDialogElement | null>;
  const [visibleTab, setVisibleTab] = useState<visibleTabType>('data');
  const { getEventsByActorId } = useTimeline();

  const actorEvents = getEventsByActorId(actor.id);

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const navigateToEvent = (id: string) => {
    // Implement navigation logic here
    closeDialog();
    scrollToEvent(id);
  };

  const scrollToEvent = (id: string) => {
    const eventElement = document.getElementById(id);
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const toggleTab = () => {
    setVisibleTab((prevTab) => (prevTab === 'data' ? 'timeline' : 'data'));
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <button autoFocus className={styles.closeButton} onClick={closeDialog} aria-label="Tancar">
        ×
      </button>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <button type="button" className={styles.tabSwitcher} onClick={toggleTab}>
            ToggleTab
          </button>
        </div>
        <div className={styles.tabs}>
          {visibleTab === 'data' && (
            <div className={styles.data}>
              <AvatarComponent actor={actor} size="l" shape="square" />
              <h2>{actor.name}</h2>
              <p className={styles.position}>{actor.position}</p>
              <p className={styles.description}>{actor.description}</p>
              {/* <div>Participava al CECOPI? {actor.cecopi ? 'Sí' : 'No'}</div> */}
            </div>
          )}
          {visibleTab === 'timeline' && (
            <div className={styles.timeline}>
              <h3>Events en els que participa {actor.name}:</h3>
              <ul className={styles.eventList}>
                {actorEvents.map((event) => (
                  <li key={event.id}>
                    <strong>{new Date(event.time).toLocaleDateString()}</strong>: {event.title}
                    <button type="button" onClick={() => navigateToEvent(event.id)}>
                      Navigate
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
});

ActorDialog.displayName = 'ActorDialog';

export default ActorDialog;
