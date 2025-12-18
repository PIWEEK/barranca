import type ActorModel from '../../../../../../models/actors.model';
import type TimelineEventModel from '../../../../../../models/timeline.model';

export default interface ActorAvatarProps {
  actor: ActorModel;
  event: TimelineEventModel;
}
