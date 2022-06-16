import { Signin } from "../signin";
import style from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src="/images/logo.svg" alt="ig-news" />

        <nav>
          <a href="" className={style.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>
        <Signin />
      </div>
    </header>
  );
};
