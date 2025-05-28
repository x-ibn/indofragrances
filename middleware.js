import { NextResponse } from 'next/server';

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  const isBot = /bot|crawl|preview|facebook|google|whatsapp/i.test(ua);
  const country = request.geo?.country || 'UNKNOWN';

  if (isBot || country !== 'ID') {
    const url = request.nextUrl.clone();
    url.pathname = '/white.html';
    return NextResponse.rewrite(url);
  }

  if (request.nextUrl.pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/landingpage';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
