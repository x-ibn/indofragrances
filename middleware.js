import { NextResponse } from 'next/server';

export function middleware(request) {
  const country = request.geo?.country || 'UNKNOWN';
  const ua = request.headers.get('user-agent') || '';
  const isBot = /bot|crawl|preview|facebook|google|whatsapp/i.test(ua);

  if (isBot || country !== 'ID') {
    const url = request.nextUrl.clone();
    url.pathname = '/white.html';
    return NextResponse.rewrite(url);
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/landingpage', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
