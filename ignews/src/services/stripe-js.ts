import { loadStripe } from "@stripe/stripe-js";

const getStripeJs = async () => {
  const stripKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
    : "";

  const stripejs = await loadStripe(stripKey);
  return stripejs;
};

export default getStripeJs;
