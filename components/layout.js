import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Vijay Krishnavanshi'
export const siteTitle = "Vijay's Blog"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal blog"
        />
        <meta
          property="og:image"
          content={`https://avatars2.githubusercontent.com/u/8918307?s=460&u=d458aea884a1f811bd34ee8573611802b2243502&v=4`}
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h2 className={utilStyles.headingXl}>Vijay's Blog</h2>
            <p className={utilStyles.subHeading}>Github: <a href="https://github.com/vijaykrishnavanshi">https://github.com/vijaykrishnavanshi</a></p>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingXl}>Vijay's Blog</h2>
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
