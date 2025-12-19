export type EventCategory = 'general' | 'technical' | 'social' | 'environmental' | 'political';
export type EventType = 'info' | 'warning' | 'alert' | 'update';
export type ReferenceType = 'article' | 'social' | 'video' | 'audio' | 'other';

export interface TimelineEventReferenceModel {
  url: string;
  source?: string;
  title?: string;
  type?: ReferenceType;
}

export interface TimelineEventHintModel {
  type: 'info' | 'warning' | 'error' | 'question';
  content: string;
}

export default interface TimelineEventModel {
  id: string;
  time: string;
  title: string;
  content?: string;
  hint?: TimelineEventHintModel;
  actors: string[];
  image?: string;
  references?: TimelineEventReferenceModel[];
}
