import type ActorModel from '../../models/actors.model';
import type TimelineEventModel from '../../models/timeline.model';

export default interface EventComponentProps {
  event: TimelineEventModel;
  actors: ActorModel[];
  onVisible?: (time: string) => void;
}
