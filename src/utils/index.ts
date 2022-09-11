import {AttributeT, GetAddressRespT, UserT} from '../types';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
// https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
export const swrOptions = {
  revalidateOnFocus: false,
};

export const API_PATH =
  process.env.NODE_ENV === 'development' && !process.env.FORCE_PROD
    ? 'http://localhost:8081'
    : 'https://keiko.floor.report';

export const ellipseAddress = (address = '', width = 4): string => {
  if (!address) {
    return '';
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
};

export const getName = (user: UserT, data: GetAddressRespT) => {
  if (user.name) {
    return user.name;
  }

  if (data.ensName) {
    return data.ensName;
  }

  return ellipseAddress(data.address);
};

export const getHeaders = (
  address: string | string[],
  moreHeaders?: any,
): HeadersInit => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Address': address as string,
    'X-API-Key': process.env.NEXT_PUBLIC_KEIKO_API_KEY as string,
  };

  if (moreHeaders) {
    Object.assign(headers, moreHeaders);
  }

  return new Headers(headers);
};

export const getFrenPhoto = (photo: string) => {
  const baseURL = 'https://storage.googleapis.com/public.floor.report/';

  return `${baseURL}${photo.toLowerCase()}.png`;
};

export const getOpenSeaAttributeURL = (slug: string, attribute: AttributeT) => {
  const baseURL = 'https://opensea.io/collection';
  const params = `?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=${attribute.key}&search[stringTraits][0][values][0]=${attribute.value}`;
  const url = `${baseURL}/${slug}/${params}`;
  return url;
};

export const formatUSD = (totalUSD: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalUSD);
