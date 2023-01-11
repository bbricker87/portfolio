const PROJECTS_GRAPHQL_FIELDS = `
name
url
description
createdAt
tags
image {
  url
}
`
const SOCIALS_GRAPHQL_FIELDS = `
type
url
`
const CONTENT_GRAPHQL_FIELDS = `
tag
text
`
const ASSET_GRAPHQL_FIELDS = `
title
fileName
url
size
width
height
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
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => {
    return response.json()
  })
}

export async function getProjects() {
  const response = await fetchGraphQL(
    `query {
      projectsCollection(order: [featured_DESC, createdAt_DESC]) {
        items {
          ${PROJECTS_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return response?.data?.projectsCollection?.items
}

export async function getSocials() {
  const response = await fetchGraphQL(
    `query {
      socialsCollection {
        items {
          ${SOCIALS_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return response?.data?.socialsCollection?.items
}

export async function getFeaturedProject() {
  const response = await fetchGraphQL(
    `query {
      projectsCollection(where: { featured: true }) {
        items {
          ${PROJECTS_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return response?.data?.projectsCollection?.items[0]
}

export async function getTextContentByTag(tag: string) {
  const response = await fetchGraphQL(
    `query {
      contentCollection(where: { tag: "${tag}" }) {
        items {
          ${CONTENT_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return response?.data?.contentCollection?.items[0]?.text
}

export async function getAssetByTitle(title: string) {
  const response = await fetchGraphQL(
    `query {
      assetCollection(where: { title: "${title}" }) { 
        items {
          ${ASSET_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return response?.data?.assetCollection?.items[0]
}
