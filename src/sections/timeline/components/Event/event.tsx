import { useEffect, useRef } from 'react';
import { useOnScreen } from '../../../../hooks/useOnScreen';
import type EventComponentProps from './event.model';
import styles from './event.module.css';
import EventLineComponent from './components/EventLine/EventLine';
import EventCardComponent from './components/EventCard/EventCard';

export default function EventComponent({ event, actors, onVisible }: EventComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.5 });

  const actorsData = actors.filter((actor) => event.actors.includes(actor.id));
  console.log('Event Actors:', actorsData);

  useEffect(() => {
    if (isVisible && onVisible) {
      onVisible(event.time);
    }
  }, [isVisible, onVisible, event.time]);

  return (
    <article ref={ref} className={styles.event}>
      <EventLineComponent />
      <div className="content">
        <div className="actors">
          {actorsData.map((actor) => (
            <EventCardComponent key={actor.id} actor={actor} />
          ))}
        </div>
        <p>{event.time} </p>
        <h2>{event.title}</h2>
        <p>{event.content}</p>
      </div>
    </article>
  );
}
