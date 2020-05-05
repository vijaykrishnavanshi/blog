import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GA_TRACKING_ID } from '../lib/analytics'

const name = 'Vijay Krishnavanshi'
export const siteTitle = "Vijay's Blog"

export default function Layout({ children, home, tag }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Ideas and some more ideas"
        />
        <meta
          property="og:image"
          content={`https://avatars2.githubusercontent.com/u/8918307?s=460&u=d458aea884a1f811bd34ee8573611802b2243502&v=4`}
        />
      </Head>
      <header className={styles.header}>
        {(home || tag) ? (
          <>
            <Link href="/">
              <h2 className={utilStyles.headingXl}>Vijay's Blog</h2>
            </Link>
            <p className={utilStyles.subHeading}>Github: <a href="https://github.com/vijaykrishnavanshi">https://github.com/vijaykrishnavanshi</a></p>
          </>
        ) : (
          <>
            <Link href="/">
              <h2 className={utilStyles.headingXl}>Vijay's Blog</h2>
            </Link>
            {/* <p className={utilStyles.subHeading}>Github: <a href="https://github.com/vijaykrishnavanshi">https://github.com/vijaykrishnavanshi</a></p> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
