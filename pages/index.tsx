import Head from 'next/head'
import NavBar from '../components/navbar'
import Header from '../components/header'
import {
  getFeaturedProject,
  getProjects,
  getSocials,
  getTextContentByTag,
} from './api/api'

export default function Home({
  projects,
  socials,
  intro,
}: {
  projects: any
  socials: any
  intro: any
}) {
  return (
    <>
      <Head>
        <title>Ben Bricker | Home</title>
        <meta name="description" content="Ben Bricker portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-cultured">
        <Header socials={socials} />
        <NavBar />
        <div className="my-24 container mx-auto">
          <div className="max-w-4xl mx-auto text-xl leading-relaxed">
            {intro}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const featured = (await getFeaturedProject()) || null
  const socials = (await getSocials()) || []
  const intro = (await getTextContentByTag('site-intro')) || null
  return {
    props: { featured, socials, intro },
  }
}
