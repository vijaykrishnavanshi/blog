import Head from 'next/head'
import Layout, { siteTitle } from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.css'
import { getPostsByTag, getAllPostTags } from '../../../lib/posts'
import Link from 'next/link'
import Date from '../../../components/date'

export default function TagHome({ allPostsData }) {
  return (
    <Layout tag>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, tags }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText} key={`date_${id}`}>
                <Date dateString={date} />
              </small>
              <small className={utilStyles.lightTags} key={`tags_${id}`}>
                {tags.map(tag => (
                  <Link href="/posts/tag/[tag]" as={`/posts/tag/${tag}`}>
                    <a>{`#${tag}`} </a>
                  </Link>
                ))}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostTags()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const allPostsData = await getPostsByTag(params.tag)
  return {
    props: {
      allPostsData
    }
  }
}  
