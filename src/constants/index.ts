export const Routes = {
  INDEX: () => '/',
  ABOUT: () => '/about',
  FOLLOWING: () => '/following',
  FRENS: () => '/frens',
  PRIVACY: () => '/privacy',
  SETTINGS: () => '/settings',
  TRENDING: () => '/trending',
  UPDATES: () => '/updates',
  COLLECTION: (collection: string) => `/collection/${collection}`,
  ADDRESS: (address: string) => `/address/${address}`,
};
