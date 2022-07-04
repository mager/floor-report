export type Collection = {
  name: string;
  slug: string;
  thumb: string;
  floor: number;
  '7d': number;
  '1d': number;
  '30d': number;
  cap: number;
  supply: number;
  num: number;
  sales: number;
  updated: Date;
};

export type Trait = {
  name: string;
  value: number;
  openSeaURL: string;
};

export type NFTT = {
  name: string;
  imageUrl: string;
  tokenId: string;
  traits: Trait[];
};

export type CollectionT = {
  name: string;
  slug: string;
  floor: number;
  thumb: string;
  updated: Date;
  numOwned: number;
  nfts: NFTT[];
  isFollowing: boolean;
  collection: Collection;
};

export type CollectionRowT = {
  name: string;
  slug: string;
  thumb: string;
  floor: number;
  '7d': number;
};

export type FrenT = {
  address: string;
  name: string;
  slug: string;
  imageUrl: string;
  photo: boolean;
};

export type UserT = {
  name: string;
  opensea: string;
  photo: boolean;
  twitter: string;
};

export type GetAddressRespT = {
  address: string;
  ensName: string;
  collections: CollectionRowT[];
  nfts: NFTT[];
  totalETH: number;
  updatedAt: Date;
  user: UserT;
};
