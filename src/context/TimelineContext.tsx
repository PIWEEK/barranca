import { createContext } from 'react';

import type TimelineEventModel from '../sections/timeline/models/timeline.model';
import type ActorModel from '../sections/timeline/models/actors.model';

export interface TimelineContextType {
  events: TimelineEventModel[];
  actors: ActorModel[];
  getActorById: (id: string) => ActorModel | undefined;
  getActorsByIds: (ids: string[]) => ActorModel[];
  getEventsByActorId: (actorId: string) => TimelineEventModel[];
}

export const TimelineContext = createContext<TimelineContextType | null>(null);
