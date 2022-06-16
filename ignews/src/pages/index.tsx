import { GetStaticProps } from "next";
import Head from "next/head";
import { Subscribe } from "../component/subscribe";
import { stripe } from "../services/stripe";
import style from "./home.module.scss";

interface ProductProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: ProductProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <Subscribe priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

// getStaticProps criar um html virtual para não consumir api toda hora
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1LBNfCGc6vXOvghmLWtiI5He");

  const product = {
    priceIOd: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
