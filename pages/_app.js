import Layout from "../components/common/Layout";
import "../styles/globals.css";
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
