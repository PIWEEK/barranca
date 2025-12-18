import type ActorModel from '../../../../models/actors.model';
import type TimelineEventModel from '../../../../models/timeline.model';

export default interface EventCardProps {
  actors: ActorModel[];
  event: TimelineEventModel;
}
