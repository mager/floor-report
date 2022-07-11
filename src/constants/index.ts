export const Routes = {
  INDEX: () => '/',
  ABOUT: () => '/about',
  FOLLOWING: () => '/following',
  FRENS: () => '/frens',
  PRIVACY: () => '/privacy',
  SETTINGS: () => '/settings',
  TRENDING: () => '/trending',
  UPDATES: () => '/updates',
  COLLECTIONS: () => `/collections`,
  COLLECTION: (collection: string) => `/collection/${collection}`,
  ADDRESS: (address: string) => `/address/${address}`,
};
