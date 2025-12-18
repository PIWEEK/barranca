import type { ReactNode } from 'react';

import type TimelineEventModel from '../sections/timeline/models/timeline.model';
import type ActorModel from '../sections/timeline/models/actors.model';

import timelineData from '../sections/timeline/data/timeline.json';
import actorsData from '../sections/timeline/data/actors.json';

import { TimelineContext } from './TimelineContext';

export function TimelineProvider({ children }: { children: ReactNode }) {
  const events = timelineData as unknown as TimelineEventModel[];
  const actors = actorsData as unknown as ActorModel[];

  const getActorById = (id: string) => actors.find((actor) => actor.id === id);

  const getActorsByIds = (ids: string[]) =>
    ids
      .map((id) => actors.find((actor) => actor.id === id))
      .filter((actor): actor is ActorModel => actor !== undefined);

  const getEventsByActorId = (actorId: string) =>
    events.filter((event) => event.actors.includes(actorId));

  return (
    <TimelineContext.Provider
      value={{ events, actors, getActorById, getActorsByIds, getEventsByActorId }}
    >
      {children}
    </TimelineContext.Provider>
  );
}
