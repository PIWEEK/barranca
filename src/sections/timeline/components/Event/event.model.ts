import type { TimelineEventModel } from '../../models/timeline.model';

export default interface EventComponentProps {
  event: TimelineEventModel;
  onVisible?: (time: string) => void;
}
