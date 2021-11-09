import { Layout } from '../layout/Layout';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
 