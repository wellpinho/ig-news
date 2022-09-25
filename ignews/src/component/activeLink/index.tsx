import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface IActiveLink extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}
const ActiveLink = ({ children, activeClassName, ...rest }: IActiveLink) => {
  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClassName : "";

  // para passa dados do filho par ao pai como uma props usamos o avançado cloneElement
  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
};

export default ActiveLink;
