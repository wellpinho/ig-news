import type { AppProps } from "next/app";
import { SessionProvider as NextAuthProvder } from "next-auth/react";
import { Header } from "../component/header";
import "../styles/global.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NextAuthProvder
      session={session}
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      <Header />
      <Component {...pageProps} />;
    </NextAuthProvder>
  );
}

export default MyApp;
