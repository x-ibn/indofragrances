import { NextResponse } from 'next/server';

export function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const country = req.geo?.country || 'UNKNOWN';
  const isBot = /bot|crawl|spider|google|bing|facebook|preview|whatsapp/i.test(ua);

  if (isBot || country !== 'ID') {
    req.nextUrl.pathname = '/white.html';
    return NextResponse.rewrite(req.nextUrl);
  }

  req.nextUrl.pathname = '/landingpage';
  return NextResponse.rewrite(req.nextUrl);
}
