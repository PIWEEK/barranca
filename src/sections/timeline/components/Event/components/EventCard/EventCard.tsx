import ActorAvatarComponent from './components/ActorAvatar/ActorAvatar';
import type EventCardProps from './EventCard.model';
import styles from './EventCard.module.css';

export default function EventCardComponent({ event, actors }: EventCardProps) {
  return (
    <div className={styles.card + (event.type === 'title' ? ` ${styles['card-title']}` : '')}>
      <div className={styles['actors-wrapper']}>
        {actors.map((actor) => (
          <ActorAvatarComponent key={actor.id} actor={actor} event={event} />
        ))}
      </div>
      <div
        className={styles.content + (event.references?.length ? '' : ` ${styles['no-references']}`)}
      >
        <h2 className={styles.title}>{event.title}</h2>
        <p>{event.content}</p>
      </div>
      {event.references && event.references.length > 0 && (
        <details className={styles.references}>
          <summary className={styles['references-summary']}>Fonts</summary>
          <ul className={styles['references-list']}>
            {event.references.map((reference, index) => (
              <li key={index}>
                <a href={reference.url} target="blank">
                  {reference.source}
                </a>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
