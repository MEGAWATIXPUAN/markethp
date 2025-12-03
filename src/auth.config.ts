import Google from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const config = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname.startsWith('/login');

      if (isLoggedIn && isOnLoginPage) {
        return Response.redirect(new URL('/', nextUrl));
      }

      if (!isLoggedIn && !isOnLoginPage) {
        return false;
      }

      return true;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
