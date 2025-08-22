import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('PADEL_ACCESS_TOKEN', '', {
      maxAge: -1,
      path: '/',
    })
  );

  res.status(200).json({ message: 'Logged out' });
};
