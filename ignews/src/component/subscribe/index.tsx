import { signIn, useSession } from "next-auth/react";
import axiosApi from "../../services/axiosApi";
import getStripeJs from "../../services/stripe-js";
import style from "./styles.module.scss";

interface SubscribeProps {
  priceId: string;
}
export const Subscribe = ({ priceId }: SubscribeProps) => {
  const { data: session, status } = useSession();

  async function handlSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    // criação da checkout session
    try {
      const res = await axiosApi.post("/subscribe");
      const { sessionId } = res.data;
      const stripe = await getStripeJs();

      stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <button
      type="button"
      className={style.subButton}
      onClick={() => handlSubscribe()}
    >
      Subscribe now
    </button>
  );
};
