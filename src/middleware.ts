import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl

  // if (pathname.startsWith('/admin') && pathname !== '/admin/dashboard') {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
