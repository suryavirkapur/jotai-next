import { useAtom } from "jotai";
import type { NextPage } from "next";
import { token as tok } from "../lib/store";

const Hello: NextPage = () => {
  let [token, setToken] = useAtom(tok);
  return <div>{token}</div>;
};

export default Hello;
