import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          username: 'Omar',
          email: 'abc@gmail.com',
          accessToken: '123123123x31x12x12x12z121dx32342323',
        };

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt(props) {
      if (props.user) {
        // @ts-ignore
        props.token.accessToken = props.user.accessToken;
      }
      // console.log('JWT: ', props);
      return props.token;
    },
    async session(params) {
      // console.log('Session: ', params);

      return params.session;
    },
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
});
