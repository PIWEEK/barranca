export type EventCategory = 'general' | 'technical' | 'social' | 'environmental' | 'political';
export type EventType = 'info' | 'warning' | 'alert' | 'update';
export type ReferenceType = 'article' | 'social' | 'video' | 'audio' | 'other';

export interface TimelineEventReferenceModel {
  url: string;
  source?: string;
  type?: ReferenceType;
}

export default interface TimelineEventModel {
  id: string;
  title: string;
  content?: string;
  actors: string[];
  category: string;
  verified: boolean;
  image?: string;
  references?: TimelineEventReferenceModel[];
  time: string;
  type: string;
}
