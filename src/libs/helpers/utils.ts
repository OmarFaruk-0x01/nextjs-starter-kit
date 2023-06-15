import { NextRequest } from 'next/server';
import { ProtectedRoutes } from './constants';

export const domainParser = (req: NextRequest) => {
  let domain = req.headers.get('host') as string;

  domain = domain.replace('www.', ''); // remove www. from domain

  const path = req.nextUrl.pathname;

  return { domain, path };
};

export const isProtectedRoute = (route: string) => {
  return ProtectedRoutes.has(route);
};
