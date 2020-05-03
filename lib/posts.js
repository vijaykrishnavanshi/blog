import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    console.log(fileNames);
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export function getAllPostTags() {
    const uniqueTags = {};
    const fileNames = fs.readdirSync(postsDirectory)
    for (let i = 0; i < fileNames.length; i++) {
      const fileName = fileNames[i];
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
    
      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents)
      const { tags } = data;
      tags.forEach(tag => uniqueTags[tag] = true);
    }
    return Object.keys(uniqueTags).map(tag => {
      return {
        params: {
          tag: tag.replace(/\#/, '')
        }
      }
    })
  }

  export async function getPostsByTag(tag) {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
  
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
  
      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents)
      if (data.tags.map(elem => elem.toLowerCase()).indexOf(`#${tag.toLowerCase()}`) === -1) {
        return null;
      }
      // Combine the data with the id
      return {
        id,
        ...data
      }
    });
    return allPostsData.filter(Boolean);
  }

  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }
  