import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "../activeLink";
import { Signin } from "../signin";
import style from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src="/images/logo.svg" alt="ig-news" />

        <nav>
          <ActiveLink activeClassName={style.active} href="/">
            <a>Home</a>
          </ActiveLink>
          {/* prefetch deixa pré carregado antes de ir a pagina */}
          <ActiveLink activeClassName={style.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <Signin />
      </div>
    </header>
  );
};
