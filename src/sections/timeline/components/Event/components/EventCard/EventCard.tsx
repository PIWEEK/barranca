import { FiAlertTriangle, FiHelpCircle, FiInfo, FiXCircle } from 'react-icons/fi';
import ActorAvatarComponent from './components/ActorAvatar/ActorAvatar';
import type EventCardProps from './EventCard.model';
import styles from './EventCard.module.css';
import { XEmbed } from 'react-social-media-embed';

export default function EventCardComponent({ event, actors }: EventCardProps) {
  const gethintType = () => {
    if (!event.hint) return '';

    switch (event.hint.type) {
      case 'info':
        return <FiInfo />;
      case 'warning':
        return <FiAlertTriangle />;
      case 'error':
        return <FiXCircle />;
      case 'question':
        return <FiHelpCircle />;
      default:
        return '';
    }
  };

  const articleReferences = event.references
    ? event.references.filter((reference) => reference.type === 'article')
    : event.references;

  const videoReferences = event.references
    ? event.references.filter((reference) => reference.type === 'video')
    : event.references;

  const socialReferences = event.references
    ? event.references.filter((reference) => reference.type === 'social')
    : event.references;

  return (
    <div className={styles.card}>
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
        {event.hint && (
          <p className={styles.hint + ` ${styles[`hint-${event.hint.type}`]}`}>
            <div className={styles[`hint-icon`]}>{gethintType()}</div>
            {event.hint.content}
          </p>
        )}
      </div>
      {socialReferences && socialReferences.length > 0 && (
        <div className={styles['social-wrapper']}>
          {socialReferences.map((reference, index) => (
            <XEmbed key={index} url={reference.url} />
          ))}
        </div>
      )}
      {videoReferences && videoReferences.length > 0 && (
        <div className={styles['video-wrapper']}>
          {videoReferences.map((reference, index) => (
            <video key={index} controls className={styles.video}>
              <source src={`./videos/${reference.url}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      )}
      {articleReferences && articleReferences.length > 0 && (
        <ul className={styles['references-list']}>
          {articleReferences.map((reference, index) => (
            <li key={index}>
              <a href={reference.url} target="blank">
                {reference.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
