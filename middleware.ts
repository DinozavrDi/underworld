// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//   const isProtected = req.nextUrl.pathname.startsWith('/profile');

//   if (isProtected && !token) {
//     const loginUrl = new URL('/login', req.url);
//     loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/profile/:path*'], // можно добавить другие защищённые маршруты
// };