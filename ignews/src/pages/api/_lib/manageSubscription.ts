import faunadb from "../../../services/fauna";
import {
  Collection,
  Create,
  Get,
  Index,
  Match,
  Replace,
  Select,
} from "faunadb";
import { stripe } from "../../../services/stripe";

const saveSubcription = async (
  subscriptionId: string,
  customerId: string,
  createAction = false
) => {
  // buscar o use no fauna com customerId
  // salvar os dados da subscription no faunaDB
  const userRef = await faunadb.query(
    Select("Ref", Get(Match(Index("user_by_stripe_customer_id"), customerId)))
  );

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  if (createAction) {
    await faunadb.query(
      Create(Collection("subscriptions"), { data: subscriptionData })
    );
  } else {
    await faunadb.query(
      Replace(
        Select("ref", Get(Match(Index("subscrition_by_id"), subscriptionId))),
        { data: subscriptionData }
      )
    );
  }
};

export default saveSubcription;
