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
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
