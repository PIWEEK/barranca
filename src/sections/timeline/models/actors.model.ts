export type ActorType =
  | 'politician'
  | 'institution'
  | 'official'
  | 'judicial'
  | 'journalist'
  | 'other';

export default interface ActorModel {
  id: string;
  name: string;
  fullName: string;
  position: string;
  description: string;
  type: ActorType;
  avatar: string;
  link?: string;
  cecopi: boolean;
}
