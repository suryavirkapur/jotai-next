import { useAtom } from "jotai";
import type { NextPage } from "next";
import Link from "next/link";
import { token as tok } from "../lib/store";

const Home: NextPage = () => {
  let [token, setToken] = useAtom(tok);
  return (
    <>
      <input
        value={token}
        onChange={(evt) => {
          setToken(evt.target.value);
        }}
      />
      <br />
      <Link href="/hello">Hello</Link>
    </>
  );
};

export default Home;
