import type EventCardProps from './EventCard.model';
import styles from './EventCard.module.css';

export default function EventCardComponent({ actor }: EventCardProps) {
  return (
    <div key={actor.id} className={styles.actor}>
      <img src={`/characters/${actor.avatar}`} alt="" className={styles.avatar} />
      <span className={styles.name}>{actor.name}</span>
    </div>
  );
}
