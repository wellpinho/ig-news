import Head from "next/head";
import style from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home IG news</title>
      </Head>

      <main className={style.container}>
        <section className={style.hero}>
          <span>🤝 Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
