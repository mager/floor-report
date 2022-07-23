export const fetcher = (url: string) => fetch(url).then((res) => res.json());
// https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
export const swrOptions = {
  revalidateOnFocus: false,
};

export const API_PATH =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8081'
    : 'https://keiko-jejxy3ytiq-uc.a.run.app';
// export const API_PATH = 'https://keiko-jejxy3ytiq-uc.a.run.app';

export const ellipseAddress = (address = '', width = 8): string => {
  if (!address) {
    return '';
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
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
