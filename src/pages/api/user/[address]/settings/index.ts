import {NextApiRequest, NextApiResponse} from 'next';
import {API_PATH, getHeaders} from '../../../../../utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const address = (req.query.address as string).toLowerCase();

  if (!address) {
    return;
  }

  const url = `${API_PATH}/user/${address}/settings`;

  try {
    const response = await fetch(url, {
      headers: getHeaders(address),
      method: 'POST',
      body: JSON.stringify(req.body),
    });
    const resp = await response.json();
    res.status(200).json(resp);
  } catch (error) {
    console.error(error);
    res.status(500).json({error});
  }
};

export default handler;
