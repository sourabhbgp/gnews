import Router from 'next/router'
import NProgress from 'nprogress'

import '../styles/index.css'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp

// https://gnews.io/api/v4/top-headlines?token=5868a5a248028a3f4a4156acc0120e31&lang=en&max=3
