import Head from "next/head";

export default function Header({ title }) {
  return (
    <Head>
      <title>{title} - BlogWeb</title>
    </Head>
  );
}
