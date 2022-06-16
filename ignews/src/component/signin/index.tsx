import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import style from "./styles.module.scss";

export const Signin = () => {
  const userLoggedIn = true;

  return userLoggedIn ? (
    <button className={style.signinButton} type="button">
      <FaGithub color="#04d361" />
      wellpinho
      <FiX color="#737388" className={style.iconRigth} />
    </button>
  ) : (
    <button className={style.signinButton} type="button">
      <FaGithub color="#eba417" />
      Sigin with Github
    </button>
  );
};
