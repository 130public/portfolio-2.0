//QUERIES FOR ALGOLIA
const PageIndexQuery = `{
  allSitePage {
    edges {
      node {
        id
        internal {
          contentDigest
          type
          description
        }
      }
    }
  }
}`

const ProjectIndexQuery = `{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        id
        internal {
          contentDigest
          type
          owner
        }
        frontmatter {
          title
          description
          cover
          date
          role
          slug
          client
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const ResourceIndexQuery = `{
  allContentfulResource {
    edges {
      node {
        id
        internal {
          contentDigest
          type
          owner
        }
        updatedAt
        createdAt
        title
        description
        author
        source
        thumbnail{
          file{
            url
            fileName
          }
          title
          description
        }
        skills {
          ... on ContentfulSkill {
            name
          }
        }
      }
    }
  }
}`

//PROCESS FOR ALGOLIA
const flatten = arr =>
  arr.map(({ node: { id, internal, frontmatter, ...rest } }) => ({
    objectID: id,
    internal,
    frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

//INDICES FOR ALGOLIA
const queries = [
  {
    query: PageIndexQuery,
    transformer: ({ data }) => flatten(data.allSitePage.edges),
    indexName: `Page`,
    settings,
  },
  {
    query: ProjectIndexQuery,
    transformer: ({ data }) => flatten(data.allMarkdownRemark.edges),
    indexName: `Project`,
    settings,
  },
  {
    query: ResourceIndexQuery,
    transformer: ({ data }) => flatten(data.allContentfulResource.edges),
    indexName: `Resource`,
    settings,
  }
]

module.exports = queries