import type ActorModel from '../../../../../../../../models/actors.model';
import styles from './Avatar.module.css';

export default function AvatarComponent({
  actor,
  size = 'm',
  shape = 'rounded',
}: {
  actor: ActorModel;
  size?: 's' | 'm' | 'l';
  shape?: 'rounded' | 'square';
}) {
  return (
    <img
      src={`/characters/${actor.avatar}`}
      alt=""
      className={`${styles.avatar} ${styles['size-' + size]} ${styles['shape-' + shape]}`}
    />
  );
}
