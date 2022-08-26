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
  topNFTs: TopNFTT[];
  attributes: AttributeT[];
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
  floor: number;
};

export type CollectionT = {
  name: string;
  slug: string;
  floor: number;
  value: number;
  thumb: string;
  updated: Date;
  numOwned: number;
  nfts: NFTT[];
  isFollowing: boolean;
  collection: Collection;
};

export type TopNFTT = {
  name: string;
  image: string;
  osLink: string;
};

export type CollectionRowT = {
  name: string;
  slug: string;
  thumb: string;
  floor: number;
  '7d': number;
};

export type FrenT = {
  users: FrenUserT[];
};

export type FrenUserT = {
  address: string;
  name: string;
  slug: string;
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
  collections: CollectionT[];
  nfts: NFTT[];
  totalETH: number;
  totalUSD: number;
  updatedAt: Date;
  user: UserT;
  updating: boolean;
};

export type HomeT = {
  randomNFT: RandomNFTT;
  stats: StatsT;
};

export type RandomNFTT = {
  collectionName: string;
  collectionSlug: string;
  expires: string;
  imageUrl: string;
  name: string;
  owner: string;
  updated: string;
};

export type StatsT = {
  totalCollections: number;
  totalUsers: number;
  updated: string;
};

export type CollectionsT = {
  trending: TrendingT;
};

export type TrendingT = {
  topHighestFloor: Collection[];
  topWeeklyVolume: Collection[];
};

export type AttributeT = {
  key: string;
  value: string;
  floor: number;
  image: string;
};
