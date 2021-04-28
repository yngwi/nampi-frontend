import { ItemType } from "./enums/ItemType";

export interface Label {
  value: string;
  language?: string;
}

export interface EventDate {
  sort: Date;
  exact?: Date;
  earliest?: Date;
  latest?: Date;
}

export interface Event {
  id: string;
  type: string[];
  date: EventDate;
}

export interface Person extends Item {
  birth: Event[];
  death: Event[];
}

export interface JsonLdItem {
  "@id": string;
  "@type": string[];
}

export interface Item {
  id: string;
  itemType: ItemType;
  label: Label[];
  localId: string;
  types: string;
}

export interface PartialNavigation {
  first: undefined | (() => Promise<void>);
  previous: undefined | (() => Promise<void>);
  next: undefined | (() => Promise<void>);
  last: undefined | (() => Promise<void>);
}

export type Extractor<T = any> = [
  key: string,
  extract: (data: { [key: string]: any } & JsonLdItem) => T
];

export type SearchParams = [key: string, value: number | string][];

export interface Profile {
  authorUrl?: string;
  email: string;
  familyName?: string;
  givenName?: string;
  username: string;
}
