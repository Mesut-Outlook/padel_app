import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from './prisma';

const JWT_SECRET = process.env.JWT_SECRET!;

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.PADEL_ACCESS_TOKEN;

    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, JWT_SECRET);
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error('Not real user');
        }
      } catch (error) {
        res.status(401);
        res.json({ error: 'Not Authorized' });
        return;
      }
      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: 'Not Authorized' });
  };
};

export const validateAdmin = (handler) => {
  return validateRoute(async (req, res, user) => {
    if (user.role !== 'ADMIN') {
      res.status(403);
      res.json({ error: 'Forbidden' });
      return;
    }
    return handler(req, res, user);
  });
};
