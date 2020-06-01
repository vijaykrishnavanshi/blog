import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.lightTags}>
          {postData.tags.map((tag, index) => (
            <Link  href="/posts/tag/[tag]" as={`/posts/tag/${tag}`} key={index}>
              <a> {`#${tag}`} </a>
            </Link>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </Layout>
    )
  }
  

export async function getStaticPaths() {
    const paths = getAllPostIds()
    // console.log(paths);
    return {
      paths,
      fallback: false
    }
}
  
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }
  
