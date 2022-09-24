import { Create, Collection } from "faunadb";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import faunadb from "../../../services/fauna";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      authorization: {
        url: "https://github.com/login/oauth/authorize",
        params: { scope: "read:user user:email" },
      },
    }),
  ],

  callbacks: {
    async signIn({ user: { email } }: any) {
      await faunadb.query(
        Create(Collection("users"), {
          data: {
            email,
          },
        })
      );
      return true;
    },
  },
};

// Serveless
// Fauna DB - é mais simples de entender
// Dinamo DB da AWS - mais complexo e caro

export default NextAuth(authOptions);
