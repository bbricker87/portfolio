const PROJECTS_GRAPHQL_FIELDS = `
name
url
description
createdAt
tags
`
const SOCIALS_GRAPHQL_FIELDS = `
type
url
`

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({ query })
    }
  ).then((response) => {
    return response.json()
  })
}

export async function getProjects() {
  const response = await fetchGraphQL(
    `query {
      projectsCollection {
        items {
          ${PROJECTS_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return response?.data?.socialsCollection?.items
}

export async function getSocials() {
  const response = await fetchGraphQL(
    `query {
      socialsCollection {
        items {
          ${SOCIALS_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return response?.data?.socialsCollection?.items
}
