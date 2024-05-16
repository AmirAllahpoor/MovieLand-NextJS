import MyHeader from "@/components/Header/header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyHeader />
      <Component {...pageProps} />
    </>
  );
}
