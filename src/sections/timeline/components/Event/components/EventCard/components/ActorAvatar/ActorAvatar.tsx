import { useRef } from 'react';

import styles from './ActorAvatar.module.css';
import AvatarComponent from '../../../../../../../../components/Avatar/Avatar';
import type ActorAvatarProps from './ActorAvatar.model';
import ActorDialog from '../../../../../ActorDialog/ActorDialog';

export default function ActorAvatarComponent({ actor, event }: ActorAvatarProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div className={styles.actor}>
      <button type="button" onClick={openDialog} className={styles['avatar-wrapper']}>
        <AvatarComponent actor={actor} />
        <span className={styles.name}>{actor.name}</span>
      </button>
      <ActorDialog ref={dialogRef} actor={actor} event={event} />
    </div>
  );
}
