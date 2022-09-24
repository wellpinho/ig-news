import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import style from "./styles.module.scss";

export const Signin = () => {
  const { data: session, status } = useSession();

  console.log(status);

  return status === "authenticated" ? (
    <button
      className={style.signinButton}
      type="button"
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user?.name}
      <FiX color="#737388" className={style.iconRigth} />
    </button>
  ) : (
    <button
      className={style.signinButton}
      type="button"
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
};
