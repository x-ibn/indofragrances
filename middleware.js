import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const country = req.geo?.country || 'UNKNOWN';
  const ua = req.headers.get('user-agent') || '';
  const isBot = /bot|crawl|preview|facebook|google/i.test(ua);

  // Jika bot atau non-Indonesia → tampilkan white
  if (isBot || country !== 'ID') {
    url.pathname = '/white.html';
    return NextResponse.rewrite(url);
  }

  // Jika IP Indonesia → redirect langsung ke /landingpage
  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/landingpage', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Jalankan hanya di halaman root
};
