import '../styles/global.css'
import Router from 'next/router'

import * as gtag from '../lib/analytics'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
