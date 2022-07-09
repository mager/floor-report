import {NextApiRequest, NextApiResponse} from 'next';
import {API_PATH, getHeaders} from '../../../utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${API_PATH}/search`;

  try {
    const response = await fetch(url, {
      headers: getHeaders(req.query.address),
      method: 'POST',
      body: JSON.stringify({
        query: req.query.query,
      }),
    });
    const resp = await response.json();

    res.status(200).json(resp);
  } catch (error) {
    console.error(error);
    res.status(500).json({error});
  }
};

export default handler;
