import Head from 'next/head'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { getFeaturedProject, getSocials, getTextContentByTag } from '../api'
import Project from '../components/Project'
import Footer from '../components/Footer'

export default function Home({
  featured,
  socials,
  intro,
}: {
  featured: any
  socials: any
  intro: string
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
        <div className="my-8 sm:my-16 md:my-24 container mx-auto">
          <div className="2xl:max-w-7xl mx-auto text-xl px-4">
            <p className="text-sm sm:text-md md:text-lg leading-relaxed text-justify whitespace-pre-line">
              {intro}
            </p>
          </div>
          <div className="max-w-7xl mx-auto my-8 sm:my-15 lg:my-20 px-1">
            <h4 className="text-2xl md:text-3xl px-2 lg:px-0 lg:text-4xl mb-1 md:mb-4">
              Featured
            </h4>
            <Project project={featured} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const featured = (await getFeaturedProject()) || null
  const socials = (await getSocials()) || []
  const intro = (await getTextContentByTag('site-intro')) || ''
  console.log(featured)
  return {
    props: { featured, socials, intro },
  }
}
