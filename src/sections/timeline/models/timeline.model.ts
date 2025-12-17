export type EventCategory = 'general' | 'technical' | 'social' | 'environmental' | 'political';
export type EventType = 'info' | 'warning' | 'alert' | 'update';

export default interface TimelineEventModel {
  id: string;
  title: string;
  content?: string;
  actors: string[];
  category: string;
  verified: boolean;
  references?: Array<{
    url: string;
    source?: string;
    type?: string;
  }>;
  time: string;
  type: string;
}
