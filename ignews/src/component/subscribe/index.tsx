import style from "./styles.module.scss";

interface SubscribeProps {
  priceId: string;
}
export const Subscribe = ({ priceId }: SubscribeProps) => {
  return (
    <button type="button" className={style.subButton}>
      Subscribe now
    </button>
  );
};
