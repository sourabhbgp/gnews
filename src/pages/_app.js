import Router from 'next/router';
import NProgress from 'nprogress';

import '../styles/index.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
