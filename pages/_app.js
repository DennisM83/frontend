import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
