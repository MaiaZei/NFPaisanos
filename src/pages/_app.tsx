import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../app/store';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
